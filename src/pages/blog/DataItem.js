import React, { Component } from 'react'
import { getAverageRGB } from '../../global/Globals'
import { useSelector } from 'react-redux'
import {
    BlogPageArticle, setArticleCurrent, updateWidth
} from './GlobalState'

export function ItemProvider(props) {
    const Index = useSelector((state) => state.blog.Index)
    const listComputeWidth = useSelector((state) => state.data.ListComputeWidth)
    const IsShowContext = useSelector((state) => state.blog.IsShowContext)
    return (
        <DataItem
            _indexactive={Index}
            _isshowcontext={IsShowContext}
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
        const width = 450
        const cWidth = this.getComputedWidth(parent, rto, width)
        this.setDataListOriginWidth(cWidth)
    }
    setDataListOriginWidth(newWidth) {
        const { indexitem } = this.props
        const index = indexitem
        let width = newWidth + 6 // margin
        if(width < 258) width = 258
        BlogPageArticle.dispatch(updateWidth({ index, width }))
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
        const { title, auth, img, indexitem, _indexactive, _width } = this.props
        console.log(indexitem, _width)
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
