import React, { Component } from 'react'
import { getBlogData } from '../../service/base'
import { ItemProvider } from './DataItem'
import {
    setWidthDataLst, setListData
} from './GlobalState'
import { Blog, DataContentProvider } from '.'
import { connect } from 'react-redux'

class DataList extends Component {
    constructor(props) {
        super(props)
        this.srollContainer = React.createRef()
    }
    componentDidMount = () => {
        getBlogData().then(lst => {     //[{title, auth, img}]
            this.props.setListData(lst) // setListWidth, setListComputeWidth
        })
        window.addEventListener('resize', this.onResize);
        this.props.setWidthDataLst(window.innerWidth)
    }
    componentWillUnmount = () => {
        window.removeEventListener('resize', this.onResize);
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
    }
    onResize = (e) => {
        const target = document.querySelector(`.dnb-blog-datalist`)
        if (target) {
            this.props.setWidthDataLst(target.offsetWidth)
        }
    }
    renderItem(item, i) {
        const { title, auth, img } = item
        return <ItemProvider
            title={title}
            auth={auth}
            img={img}
            indexitem={i}
            key={`blog-article_${i}`} />
    }
    getListItem(index) {
        const { indexactive, listdata } = this.props
        if (indexactive < 0) {
            return listdata.map((item, i) => { return this.renderItem(item, i) })
        }
        return listdata.map((item, i) => { return this.renderItem(item, i) })
        // const { Width, ListIndexLastCol } = BlogPageArticle.getState().blog
        // const ismobile = Width < 150 ? false : Width + 24 < 906
        // let idx = index
        // if (!ListIndexLastCol.length) idx = ListData.length
        // else if (ListIndexLastCol.length == ListData.length) {
        //     idx = index - 1
        // } else {
        //     idx = ListIndexLastCol.find(i => i >= index)
        //     if (!idx) idx = index
        // }
        // return <>
        //     {
        //         ListData.map((item, i) => {
        //             if (i <= idx) {
        //                 return this.renderItem(item, i)
        //             }
        //         })
        //     }
        //     {index > -1 && ismobile ? <DataContentProvider /> : ''}
        //     {
        //         ListData.map((item, i) => {
        //             if (i > idx) {
        //                 return this.renderItem(item, i)
        //             }
        //         })
        //     }
        // </>
    }
    render() {

        return (
            <section className='dnb-blog-datalist dnb-max-vh dnb-scrollbar-w0'
                ref={this.srollContainer}
                onScroll={(e) => { this.handleScroll(e) }}>
                {this.getListItem()}
                <div className='dnb-blog-indication-down'
                    onClick={() => { this.scrollToBottom() }}>
                    <span></span>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    indexactive: state.blog.Index,
    listdata: state.data.ListData,
});
const mapDispatchToProps = {
    setWidthDataLst,
    setListData,
}
export const DataListProvider = connect(
    mapStateToProps,
    mapDispatchToProps)(DataList)
