import React, { Component } from 'react'
import { getBlogData } from '../../service/base'
import { ItemProvider } from './DataItem'
import {
    computeListWidth, setListData, isMobile
} from './BlogState'
import { DataContentProvider } from '.'
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
        this.props.computeListWidth(window.innerWidth)
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
        const ismoble = isMobile.call(window)
        if (ismoble) {
            this.props.computeListWidth(window.innerWidth)
        } else {
            const target = document.querySelector(`.dnb-blog-datalist`)
            if (target) {
                this.props.computeListWidth(target.offsetWidth)
            }
        }
        console.log(`onREsize`)
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
    getListItem = () => {
        const { indexactive, listdata, listlastcol1row } = this.props
        if (indexactive < 0 || !listlastcol1row.length) {
            return listdata.map((item, i) => {
                return this.renderItem(item, i)
            })
        }
        const ismoble = isMobile.call(window)
        if (ismoble) {
            let idx = indexactive
            for (let i = 0, l = listlastcol1row.length; i < l; i++) {
                if (indexactive <= listlastcol1row[i]) {
                    idx = listlastcol1row[i]
                    break
                }
            }
            console.log(idx)
            return <>
                {
                    listdata.map((item, i) => {
                        if (i <= idx) {
                            return this.renderItem(item, i)
                        }
                    })
                }
                {indexactive > -1 ? <DataContentProvider /> : ''}
                {
                    listdata.map((item, i) => {
                        if (i > idx) {
                            return this.renderItem(item, i)
                        }
                    })
                }
            </>
        }
        return listdata.map((item, i) => {
            return this.renderItem(item, i)
        })
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
    listlastcol1row: state.data.ListLastIndexEachRow,
});
const mapDispatchToProps = {
    setListData, computeListWidth
}
export const DataListProvider = connect(
    mapStateToProps,
    mapDispatchToProps)(DataList)
