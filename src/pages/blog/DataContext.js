import React, { Component } from 'react'
import { getAverageRGB } from '../../global/Globals'

export class DataContext extends Component {
    constructor(props) {
        super(props)
    }
    onImgLoaded(e) {
        const { parentElement } = e
        const parent = parentElement
        const { r, g, b } = getAverageRGB(e)
        parent.style.backgroundColor = `rgb(${r},${g},${b})`
    }
    componentDidUpdate = () => {
        console.log(`DataContext updated`)

    }
    render() {
        const { article, content } = this.props
        const tagTitle = article ? <div className='dnb-dcontext-title'>{article.title}</div> : <></>
        const tagImg = article ? <img className='dnb-dcontext-img'
            src={article.img} crossOrigin="anonymous"
            onLoad={e => { this.onImgLoaded(e.target) }} /> : <></>
            const hMarkup =  {__html: content};
        return (
            <section className='dnb-blog-datacontext dnb-max-vh dnb-scrollbar-w0'>
                <div className='dnb-dcontext-title-container d-flex justify-content-between'>
                    {tagTitle}
                    <div className='dnb-dcontext-close'>
                        <svg viewBox="0 0 24 24" focusable="false" height="24" width="24" jsname="lZmugf"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                    </div>
                </div>
                <div className='dnb-dcontext-present text-center'>
                    {tagImg}
                </div>
                <div className='dnb-dcontext-content' dangerouslySetInnerHTML={hMarkup} />
            </section>
        )
    }
}