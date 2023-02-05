import React, { Component, useEffect, useState, useLayoutEffect } from 'react'
import { DataList } from './Components'
import { DataContext } from './DataContext'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'
import { BlogArticle, setListContext } from './GlobalState'
import { getBlogArticle } from '../../service/base'
import './style.scss'

export class Blog extends Component {
    render() {
        return (
            <Provider store={BlogArticle}>
                <BlogMain />
            </Provider>
        )
    }
}
function BlogMain() {
    const ArticleStore = useSelector((state) => state.reducer)
    const [width] = useWindowSize()
    useEffect(() => {
        //console.log(`BlogOverview`, ArticleStore)
        //  window.scrollTo(0, 0)
        const { Index } = ArticleStore
        const dList = document.querySelector(`.dnb-blog-datalist`)
        if (dList) {
            const dContext = dList.querySelector(`.dnb-blog-datacontext`)
            if (dContext) {
                if (-1 < Index) {
                    if (width < 906) {
                        dList.scrollTo({
                            top: dContext.offsetTop, behavior: 'smooth'
                        })
                        dContext.style.maxHeight = 'initial'
                    } else {
                        dContext.style.maxHeight = ''
                        dContext.scrollTo({
                            top: 0, behavior: 'smooth'
                        })
                    }
                }
            }
        }
    })
    return (
        <main className='dnb-blog-container'>
            {
                ArticleStore.Index > -1 && width >= 906 ? <DataContextProvider /> : ''
            }
            <DataListProvider />
        </main>
    )
}

export function DataContextProvider() {
    const ArticleStore = useSelector((state) => state.reducer)
    const [content, setContent] = useState('');
    function getArticle() {
        const { Name, Index, ListData } = ArticleStore
        const artc = ListData.find((d, i) => d.title == Name && i == Index)
        return artc
    }

    useEffect(() => {
        const { Name, Index, ListContext } = ArticleStore
        let content = ListContext[Index]
        if (content) {
            setContent(content)
        } else {
            getBlogArticle(Name).then(article => {  // {title, context}
                const { context } = article ? article : { context: '' }
                const index = Index
                BlogArticle.dispatch(setListContext({ index, context }))

                content = context
                setContent(content)
            })
        }
    })
    return (
        <DataContext article={getArticle()} content={content} />
    )
}
function DataListProvider() {
    const ArticleStore = useSelector((state) => state.reducer)
    const [width, height] = useWindowSize()
    useEffect(() => {

    })
    return (
        <DataList ismobile={width < 906} index={ArticleStore.Index}
            listarticle={ArticleStore.ListData} />
    )
}
function useWindowSize() {
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
}