import React, { Children, Component, cloneElement } from 'react';
import './slider.scss'

export class SliderV extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0, width: 420, height: 300
        }
        this.slider = React.createRef()
    }
    runScroll = (idx) => {
        const { height } = this.state
        this.slider.current.scrollTo({
            top: height * idx,
            behavior: 'smooth'
        })
        this.setState(prevSt => ({ index: idx }))
    }
    computeIndex = (index, isUp) => {
        const { children } = this.props
        index -= isUp ? 1 : -1
        if (index < 0) index = (children.length - 1)
        if (index > (children.length - 1)) index = 0
        return index
    }
    scrollUp = (e) => {
        this.setUnObserver();
        let idx = this.state.index
        idx = this.computeIndex(idx, true);
        this.runScroll(idx)        
    }
    scrollDown = (e) => {
        let idx = this.state.index
        idx = this.computeIndex(idx, false)
        this.runScroll(idx)
    }
    componentDidMount = () => {
        const root = this.slider.current;
        const options = {
            root: root,
            rootMargin: '0px',
            threshold: 0.25
        }
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio >= 0.25) {
                    // focus
                    const target = entry.target
                    const idx = parseInt(target.getAttribute('slideindex'))
                    this.runScroll(idx)
                }
                //else console.log(entry)
                // target element:
                //   entry.boundingClientRect
                //   entry.intersectionRect
                //   entry.isIntersecting
                //   entry.rootBounds
                //   entry.time
            })
        }
        this.observer = new IntersectionObserver(callback, options)
    }
    setObserver = () => {
        if(typeof this.observer == 'undefined') return;
        const root = this.slider.current
        root.querySelectorAll(`.dnb-sliderv-item`).forEach(item => {
            this.observer.observe(item)
        })
    }
    setUnObserver = () => {
        if(typeof this.observer == 'undefined') return;
        const root = this.slider.current
        root.querySelectorAll(`.dnb-sliderv-item`).forEach(item => {
            this.observer.unobserve(item)
        })
    }
    modifyChildren = (child, i) => {
        const prpCls = typeof child.props.className == 'string' ? `${child.props.className} ` : '';
        const className = `${prpCls}dnb-sliderv-item`
        const slideindex = `${i}`;
        const props = { className, slideindex }
        return cloneElement(child, props);
    }
    render() {
        const styl = { display: 'flex' }
        const { width, height } = this.state;
        const stlSlide = { width: `${width}px`, height: `${height}px` }
        return (
            <div style={styl}>
                <div className="dnb-slider-v dnb-scrollbar-w0" ref={this.slider}
                    onMouseOver={(e) => this.setObserver()}
                    onMouseOut={e => this.setUnObserver()}
                    style={stlSlide}>
                    <div className="dnb-sliderv-items">
                        {Children.map(this.props.children, (child, i) =>
                            this.modifyChildren(child, i))}
                    </div>
                </div>
                <div>
                    <a id="up" className="dnbslider-control up" onClick={(e) => this.scrollUp(e)}></a>
                    <a id="down" className="dnbslider-control down" onClick={(e) => this.scrollDown(e)}></a>
                </div>
            </div>
        )
    }
}