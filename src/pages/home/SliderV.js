import React, { Children, Component, cloneElement } from 'react'
import { getSlider } from '../../service/base'
import { getAverageRGB } from '../../global/Globals'
import './slider.scss'

export class ViewSliderV extends Component {
    constructor(props) {
        super(props)
        this.state = { ListSlider: [] }
    }
    componentDidMount = () => {
        getSlider().then(lst => {
            this.setState({ ListSlider: lst }); //[{title, img, icon}]
        })
    }
    getAvgBg = (e) => {
        const parent = e.parentElement
        const { r, g, b } = getAverageRGB(e)
        parent.style.backgroundColor = `rgb(${r},${g},${b})`
        e.remove()
    }
    render() {
        const { ListSlider } = this.state
        return (
            <>
                <SliderV>
                    {ListSlider.map((item, i) => {
                        const { title, img, icon } = item
                        const stl = { backgroundImage: `url("${img}")` }
                        return <div icon={icon} title={title}
                            style={stl}
                            key={`slider-item-${i + 1}`}>
                            <img className="d-none"
                                src={img}
                                onLoad={e => { this.getAvgBg(e.target) }}
                                crossOrigin="anonymous" />
                        </div>
                    })}
                </SliderV>
            </>
        )
    }
}

class SliderV extends Component {
    constructor(props) {
        super(props)
        this.state = { index: 0 }
        this.slider = React.createRef()
        this.configSlider = { width: 624, height: 447 }
    }
    runScroll = (idx, isObserver) => {
        if (!isObserver) this.setUnObserver()
        const { height } = this.configSlider
        this.slider.current.scrollTo({
            top: height * idx, behavior: 'smooth'
        })
        const { children } = this.props
        setTimeout(() => {
            if (!isObserver) this.setObserver()
            this.setState(prevSt => ({ index: idx }))
        }, children.length * 234)
    }
    computeIndex = (index, isUp) => {
        const { children } = this.props
        index -= isUp ? 1 : -1
        if (index < 0) index = (children.length - 1)
        if (index > (children.length - 1)) index = 0
        return index
    }
    scrollUp = (e) => {
        let idx = this.state.index
        idx = this.computeIndex(idx, true);
        this.runScroll(idx) // button
    }
    scrollDown = (e) => {
        let idx = this.state.index
        idx = this.computeIndex(idx, false)
        this.runScroll(idx) // button
    }
    componentDidUpdate = () => {
        console.log(`componentDidUpdate`)
        this.setObserver()
    }
    componentDidMount = () => {
        const percentView = 0.15
        const root = this.slider.current
        const options = {
            root: root, threshold: percentView
        }
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= percentView) { // focus
                    const target = entry.target
                    const idx = parseInt(target.getAttribute('slideindex'))
                    this.runScroll(idx, true)
                } //else console.log(entry)
            })
        }
        this.observer = new IntersectionObserver(callback, options)
    }
    setObserver = () => {
        if (!this.observer instanceof IntersectionObserver) return;
        const root = this.slider.current
        root.querySelectorAll(`.dnb-sliderv-item`).forEach(item => {
            this.observer.observe(item)
        })
    }
    setUnObserver = () => {
        if (!this.observer instanceof IntersectionObserver) return;
        const root = this.slider.current
        root.querySelectorAll(`.dnb-sliderv-item`).forEach(item => {
            this.observer.unobserve(item)
        })
    }
    modifyChildren = (child, i) => {
        const { height } = this.configSlider
        const style = Object.assign({ height: `${height}px` }, child.props.style)
        const prpCls = typeof child.props.className == 'string' ? `${child.props.className} ` : ''
        const className = `${prpCls}dnb-sliderv-item`
        const slideindex = `${i}`
        const props = { className, slideindex, style }
        return cloneElement(child, props)
    }
    render() {
        const { children } = this.props;
        const stylContainer = { width: `100%`, height: `483px` }
        const { width, height } = this.configSlider;
        const { index } = this.state;
        const stlSlide = { width: `100%`, height: `${height}px` }
        const stylNavIcon = { width: `32px`, height: `32px` }
        return (
            <div className='d-flex rounded-4 dnb-slider-container' style={stylContainer}>
                {children.map((child, i) => {
                    const { title } = child.props
                    if (i == index)
                        return <span className='dnb-slider-title'>{title}</span>
                })}
                <div className="dnb-slider-v dnb-scrollbar-w0 rounded-3 align-self-end mb-2 ms-2"
                    ref={this.slider}
                    style={stlSlide}>
                    <div className="dnb-sliderv-items">
                        {Children.map(children, (child, i) =>
                            this.modifyChildren(child, i))}
                    </div>
                </div>
                <div className="dnb-sliderv-buttons ms-1 mt-5">
                    <a id="up" className="dnbslider-control up rounded-3 mt-1"
                        onClick={(e) => this.scrollUp(e)} style={stylNavIcon} />
                    {children.map((child, i) => {
                        const icon = child.props.icon
                        const stlIcon = Object.assign({ backgroundImage: `url("${icon}")` }, stylNavIcon)
                        let cls = `dnbslider-control rounded-3 text-center pt-2 mt-1 text-decoration-none`
                        if (i == index) { cls += ` dnbslider-active` }
                        return <a className={cls} style={stlIcon}
                            key={`sliderv-item-${i + 1}`}
                            onClick={(e) => this.runScroll(i)}>{i + 1}</a>
                    })}
                    <a id="down" className="dnbslider-control down rounded-3 mt-1"
                        onClick={(e) => this.scrollDown(e)} style={stylNavIcon} />
                </div>
            </div>
        )
    }
}