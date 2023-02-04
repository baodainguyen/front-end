import React, { Component } from 'react'
import { getBlogData } from '../../service/base'
import { getAverageRGB } from '../../global/Globals'
import { useSelector } from 'react-redux'
import { BlogArticle, setArticleName, setIndex, setListDataOriginWs, setWidthDataLst, setListDataSize } from './GlobalState'

export class DataList extends Component {
    constructor(props) {
        super(props)
        this.state = { ListArticle: [] }
        this.srollContainer = React.createRef()
    }
    componentDidMount() {
        getBlogData().then(lst => {
            this.setState({ ListArticle: lst }) //[{title, auth, img}]
            BlogArticle.dispatch(setListDataSize(lst.length))
        })
        window.addEventListener('resize', this.onDataListResize);
        const target = this.srollContainer.current
        this.onDataListResize(target)
    }
    handleScroll(event) {
        const { target } = event
        this.checkButtonIndicationDown(target)
    }
    checkButtonIndicationDown(target) {
        const { scrollHeight, offsetHeight, scrollTop } = target
        if (scrollTop >= scrollHeight - offsetHeight) {
            const btn = target.querySelector(`.dnb-blog-indication-down`)
            if (btn) {
                btn.classList.add(`dnb-blog-btnind-hide`)
            }
        } else {
            const btn = target.querySelector(`.dnb-blog-indication-down.dnb-blog-btnind-hide`)
            if (btn) {
                btn.classList.remove(`dnb-blog-btnind-hide`)
            }
        }
    }
    scrollToBottom() {
        const target = this.srollContainer.current
        const { scrollHeight, offsetHeight } = target
        const scrllBot = scrollHeight - offsetHeight
        target.scrollTo({
            top: scrllBot, behavior: 'smooth'
        })
    }
    componentDidUpdate() {
        const target = this.srollContainer.current
        this.checkButtonIndicationDown(target)
        this.onDataListResize(target)
    }
    onDataListResize(e) {
        if (!e.target) {
            BlogArticle.dispatch(setWidthDataLst(e.offsetWidth))
        } else {
            const target = document.querySelector(`.dnb-blog-datalist`)
            if (target) {
                BlogArticle.dispatch(setWidthDataLst(target.offsetWidth))
            }
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.onDataListResize);
    }
    render() {
        const { ListArticle } = this.state
        return (
            <section className='dnb-blog-datalist dnb-max-vh dnb-scrollbar-w0'
                ref={this.srollContainer}
                onScroll={(e) => { this.handleScroll(e) }}>
                {ListArticle.map((item, i) => {
                    const { title, auth, img } = item
                    return <ItemWrap
                        title={title}
                        auth={auth}
                        img={img}
                        index={i}
                        key={`blog-article_${i}`} />
                })}
                <div className='dnb-blog-indication-down'
                    onClick={() => { this.scrollToBottom() }}>
                    <span></span>
                </div>
            </section>
        )
    }
}
function ItemWrap(props) {
    const Article = useSelector((state) => state.reducer)
    return (
        <DataItem
            isactive={props.index == Article.Index && Article.Name == props.title}
            title={props.title}
            auth={props.auth}
            img={props.img}
            index={props.index}
            listwidth={Article.ListDataWidth} />
    )
}
class DataItem extends Component {
    constructor(props) {
        super(props)
      //  this.state = { width: 450, height: 300 }
    }
    onImgLoaded = (e) => {
        const { offsetWidth, offsetHeight, parentElement } = e
        const rto = offsetHeight != 0 ? offsetWidth / offsetHeight : 1

        const parent = parentElement
        const { r, g, b } = getAverageRGB(e)
        parent.style.backgroundColor = `rgb(${r},${g},${b})`
        e.style.display = 'none'
        //e.remove()

        this.computeSize(parent, rto)
    }
    setDataListOriginWidth(width) {
        const { index } = this.props
        if (!width) width = 450 // this.state.width
        width += 6      // margin
        BlogArticle.dispatch(setListDataOriginWs({ index, width }))
    }
    computeSize(parent, ratio) {
        const { offsetWidth, offsetHeight } = parent
        let wCompute = 0
        if (1 < ratio && ratio < 2) {
            wCompute = Math.ceil(offsetHeight * ratio) + 12
        }
        else if (ratio < 1) {
            wCompute = Math.ceil(offsetWidth * ratio) + 12
        }
        else if (ratio == 1) {
            wCompute = offsetHeight + 12 + 36
        }
        this.setDataListOriginWidth(wCompute)
        if (wCompute) {
            this.setStyleContainer(parent, wCompute)
        }
    }
    setStyleContainer(imgParent, width){
        const container = imgParent.closest(`.dnb-ditem-container`)
        if(container){
            container.style.width = `${width}px`
            container.style.maxWidth = `${width}px`
        }
    }
    onSelectItem = (title, index) => {
        const { Name, Index } = BlogArticle.getState().reducer
        if (Name == title && index == Index) {
            BlogArticle.dispatch(setArticleName(''))
            BlogArticle.dispatch(setIndex(-1))
        } else {
            BlogArticle.dispatch(setArticleName(title))
            BlogArticle.dispatch(setIndex(index))
        }
    }
    componentDidUpdate = () => {
        console.log(`DataItem updated`)
    }
    render() {
        //const { width, height } = this.state
        let width = 450;
        const height = 300
        const { title, auth, img, index, isactive,listwidth } = this.props
        if(listwidth.length){
            const iW = listwidth.find(x => x.index == index)
            if(iW) width = iW.width - 6
        }
        const styl = {
            width: `${width}px`, height: `${height}px`,
            maxWidth: `${width}px`, maxHeight: `${height}px`
        }
        const slyStyl = { backgroundImage: `url(${img})` }
        const clsItemCont = `dnb-ditem-container text-center${isactive ? ' dnb-ditem-active' : ''}`
        return (
            <div className={clsItemCont} style={styl}
                onClick={() => this.onSelectItem(title, index)}>
                <div className='dnb-ditem-slide' style={slyStyl}>
                    <img className='dnb-ditem-img'
                        src={img} crossOrigin="anonymous"
                        onLoad={e => { this.onImgLoaded(e.target) }}
                    />
                </div>
                <div className='dnb-ditem-text'>
                    <p className='dnb-ditem-title text-start'
                        title={title}>{title}</p>
                    <div className='dnb-ditem-auth text-start'>
                        <a className='text-decoration-none' href='#'>{auth}</a>
                    </div>
                </div>
            </div>
        )
    }
}
export class DataContext extends Component {

    componentDidUpdate = () => {
        console.log(`DataContext updated`)
    }
    render() {
        const { articlename } = this.props
        return (
            <section className='dnb-blog-datacontext  dnb-max-vh dnb-scrollbar-w0'>
                {articlename}
            </section>
        )
    }
}