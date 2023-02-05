import React, { Component } from 'react'
import { getAverageRGB } from '../../global/Globals'
import '../../../node_modules/highlight.js/styles/rainbow.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import { BlogArticle, setArticleCurrent } from './GlobalState';

export class DataContext extends Component {
    onCloseContent() {
        const name = '', index = -1
        BlogArticle.dispatch(setArticleCurrent({ name, index }))
    }
    componentWillmount = () => {
        hljs.registerLanguage('javascript', javascript);
        hljs.highlightAll()
    }
    onImgLoaded(e) {
        const { parentElement } = e
        const parent = parentElement
        const { r, g, b } = getAverageRGB(e)
        parent.style.backgroundColor = `rgb(${r},${g},${b})`
    }
    reMarkHtml(content) {
        const lstTxt = content.split(`<pr`)
        let htmlMark = ''
        lstTxt.forEach(txt => {
            if (txt.startsWith(`code>`)) {
                const txt2 = `<pr${txt}`
                const lstTxt2 = txt2.split(`</pr`)
                lstTxt2.forEach(txtt => {
                    if (txtt.startsWith(`code>`)) {
                        const txtt2 = txtt.substring(5)
                        htmlMark += `<div>${txtt2.replace(/\n/ig, '</br>')}</div>`
                    } else {
                        const txtt3 = txtt.substring(8)
                        const txtt4 = hljs.highlight(txtt3, { language: 'javascript' }).value
                        htmlMark += `<pre><code class="hljs language-typescript">${txtt4}</code></pre>`
                    }
                })
            } else {
                htmlMark += `<div>${txt.replace(/\n/ig, '</br>')}</div>`
            }
        })
        return htmlMark
    }
    render() {
        const { article, content } = this.props
        const tagTitle = article ? <div className='dnb-dcontext-title'>{article.title}</div> : <></>
        const tagImg = article ? <img className='dnb-dcontext-img'
            src={article.img} crossOrigin="anonymous"
            onLoad={e => { this.onImgLoaded(e.target) }} /> : <></>
        let htmlMark = this.reMarkHtml(content)
        const hMarkup = { __html: htmlMark };
        return (
            <section className='dnb-blog-datacontext dnb-max-vh dnb-scrollbar-w0'>
                <div className='dnb-dcontext-title-container d-flex justify-content-between'>
                    {tagTitle}
                    <div className='dnb-dcontext-close'
                        onClick={() => { this.onCloseContent() }}>
                        <svg viewBox="0 0 24 24" focusable="false" height="24" width="24"
                            jsname="lZmugf"><path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
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