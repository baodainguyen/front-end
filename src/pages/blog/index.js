import React, { Component, useEffect } from 'react'
import { DataList, DataContext } from './Components'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux'
import { BlogArticle } from './GlobalState'
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
    const Article = useSelector((state) => state.reducer)
    useEffect(() => {
        console.log(`BlogOverview`, Article)

        window.scrollTo(0, 0)
    })
    return (
        <main className='dnb-blog-container'>
            {
                Article.Index > -1 ? <DataContext articlename={Article.Name} /> : ''
            }
            <DataList articlename={Article.Name} articleindex={Article.Index} />
        </main>
    )
}