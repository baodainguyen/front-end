import React, { Component } from 'react'
import { getBlogData } from '../../service/base'
import { getAverageRGB } from '../../global/Globals'
import { useSelector } from 'react-redux'
import { BlogArticle, setArticleCurrent, setListDataOriginWs, setWidthDataLst, setListData } from './GlobalState'
import { DataContextProvider } from '.'

export class DataList extends Component {
    constructor(props) {
        super(props)
        this.srollContainer = React.createRef()
    }
    componentDidMount = () => {
        getBlogData().then(lst => {
            BlogArticle.dispatch(setListData(lst))  //[{title, auth, img}]
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
    componentDidUpdate = () => {
        const target = this.srollContainer.current
        this.checkButtonIndicationDown(target)
        this.onDataListResize(target)
        console.log(`datalist updated`)
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
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.onDataListResize);
    }
    renderItem(item, i) {
        const { title, auth, img } = item
        return <ItemProvider
            title={title}
            auth={auth}
            img={img}
            index={i}
            key={`blog-article_${i}`} />
    }
    render() {
        const { listarticle, ismobile, index } = this.props
        const display = !ismobile ? <>{
            listarticle.map((item, i) => {
                return this.renderItem(item, i)
            })
        }</> : <>
            {
                listarticle.map((item, i) => {
                    if (i <= index) {
                        return this.renderItem(item, i)
                    }
                })
            }
            {index > -1 ? <DataContextProvider /> : ''}
            {
                listarticle.map((item, i) => {
                    if (i > index) {
                        return this.renderItem(item, i)
                    }
                })
            }
        </>
        return (
            <section className='dnb-blog-datalist dnb-max-vh dnb-scrollbar-w0'
                ref={this.srollContainer}
                onScroll={(e) => { this.handleScroll(e) }}>
                {display}
                <div className='dnb-blog-indication-down'
                    onClick={() => { this.scrollToBottom() }}>
                    <span></span>
                </div>
            </section>
        )
    }
}
function ItemProvider(props) {
    const ArticleStore = useSelector((state) => state.reducer)

    return (
        <DataItem
            isactive={props.index == ArticleStore.Index && ArticleStore.Name == props.title}
            title={props.title}
            auth={props.auth}
            img={props.img}
            index={props.index}
            listwidth={ArticleStore.ListDataWidth} />
    )
}
class DataItem extends Component {
    onImgLoaded(e) {
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
        if (!width) width = 450
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
    setStyleContainer(imgParent, width) {
        const container = imgParent.closest(`.dnb-ditem-container`)
        if (container) {
            container.style.width = `${width}px`
            container.style.maxWidth = `${width}px`
        }
    }
    onSelectItem(title, indx) {
        const { Name, Index } = BlogArticle.getState().reducer
        let name = '', index = -1
        if (Name == title && indx == Index) {
            BlogArticle.dispatch(setArticleCurrent({ name, index }))
        } else {
            name = title
            index = indx
            BlogArticle.dispatch(setArticleCurrent({ name, index }))
        }
    }
    render() {
        //const { width, height } = this.state
        let width = 450;
        const height = 300
        const { title, auth, img, index, isactive, listwidth } = this.props
        if (listwidth.length) {
            const iW = listwidth.find(x => x.index == index)
            if (iW) width = iW.width - 6
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
