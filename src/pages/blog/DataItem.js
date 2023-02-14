import React, { Component } from 'react'
import { getAverageRGB } from '../../global/Globals'
import { useSelector } from 'react-redux'
import {
    BlogPageArticle,
    setArticleCurrent, updateWidthItem,
} from './BlogState'

export function ItemProvider(props) {
    const Index = useSelector((state) => state.blog.Index)
    const listComputeWidth = useSelector((state) => state.data.ListComputeWidth)
    return (
        <DataItem
            _indexactive={Index}
            _width={listComputeWidth[props.indexitem]}
            title={props.title}
            auth={props.auth}
            img={props.img}
            indexitem={props.indexitem} />
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
        e?.remove()
        const width0 = 450
        const newWidth = this.getComputedWidth(parent, rto, width0)
        const { indexitem } = this.props
        const index = indexitem
        let width = newWidth + 6 // margin
        if (width < 249) width = 249
        const viewwidth = window.innerWidth - 24
        BlogPageArticle.dispatch(updateWidthItem({
            index,
            width,
            viewwidth
        }))
    }
    getComputedWidth(parent, ratio, width0) {
        const { offsetWidth, offsetHeight } = parent
        let wCompute = width0
        if (1 < ratio && ratio < 2) {
            wCompute = Math.ceil(offsetHeight * ratio) + 12
        }
        else if (ratio < 1) {
            wCompute = Math.ceil(offsetWidth * ratio) + 12
        }
        else if (ratio == 1) {
            wCompute = offsetHeight + 12 + 36
        }
        return wCompute
    }
    onSelectItem(indx) {         // new value
        const Index = BlogPageArticle.getState().blog.Index  // current value
        let index = -1
        const isSelect = indx !== Index
        if (isSelect) {
            index = indx
        }
        BlogPageArticle.dispatch(setArticleCurrent({ index }))
    }
    render() {
        const { title, auth, img, indexitem,
            _indexactive, _width } = this.props
        const isactive = indexitem == _indexactive
        const styl = {
            width: `${_width}px`, maxWidth: `${_width}px`
        }
        const slyStyl = { backgroundImage: `url(${img})` }
        const clsItemCont = `dnb-ditem-container text-center${isactive ? ' dnb-ditem-active' : ''}`
        return (
            <div className={clsItemCont} style={styl}
                onClick={() => this.onSelectItem(indexitem)}>
                <div className='dnb-ditem-slide' style={slyStyl}>
                    <img className='dnb-ditem-img'
                        src={img} crossOrigin="anonymous"
                        onLoad={e => { this.onImgLoaded(e.target) }} />
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
