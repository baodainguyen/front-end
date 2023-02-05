import React, { Component, useEffect, useState } from 'react'
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
    useEffect(() => {
        console.log(`BlogOverview`, ArticleStore)

        window.scrollTo(0, 0)
    })
    return (
        <main className='dnb-blog-container'>
            {
                ArticleStore.Index > -1 ? <DataContextProvider /> : ''
            }
            <DataListProvider />
        </main>
    )
}

function DataContextProvider() {
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
        <DataContext article={getArticle()}
            content={content} />
    )
}
function DataListProvider() {
    const ArticleStore = useSelector((state) => state.reducer)
    return (
        <DataList listarticle={ArticleStore.ListData} />
    )
}