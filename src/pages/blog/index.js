import React, {
    Component, Suspense,
    useEffect
} from 'react'
import { DataListProvider } from './DataList'
import { DataContentView } from './DataContent'
import { Provider, useSelector, connect } from 'react-redux'
import {
    BlogPageArticle, isMobile,
    computeListWidth, setListContext,
} from './BlogState'
import { getBlogArticle } from '../../service/base'
import './style.scss'

export class BlogProvider extends Component {
    componentDidMount = () => {
        const mainNav = document.querySelector(`#dnbApp .navbar.sticky-top`);
        mainNav.style.display = ''
    }
    render() {
        const ismble = isMobile.call(window)
        return (
            <Provider store={BlogPageArticle}>
                <BlogContainer _is_mobile={ismble} />
            </Provider>
        )
    }
}
function BlogContainer({ _is_mobile }) {
    const { Index } = useSelector((state) => state.blog)
    useEffect(() => {
        //  window.scrollTo(0, 0)
        const dList = document.querySelector(`.dnb-blog-datalist`)
        const dContext = document.querySelector(`.dnb-blog-datacontext`)
        if (dList && dContext) {
            if (-1 < Index) {
                if (_is_mobile) {
                    dList.scrollTo({
                        top: dContext.offsetTop - 12
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
    })
    return (
        <main className='dnb-blog-container'>
            {
                Index > -1 && !_is_mobile ? <DataContentProvider /> : ''
            }
            <DataListProvider />
        </main>
    )
}

class DataContentContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { content: '...' }
    }
    getArticle() {
        const { indexactive, listdata } = this.props
        if (indexactive < listdata.length) {
            return listdata[indexactive]
        }
    }
    getContent() {
        const { listcontext, indexactive, listdata } = this.props
        const itemC = listcontext.find(c => c.index == indexactive)
        const { content } = this.state
        if (itemC) {
            if (itemC.content != content) this.setState({ content: itemC.content })
        } else if (indexactive < listdata.length) {
            const dt = listdata[indexactive]
            getBlogArticle(dt.title).then(article => {  // {title, context}
                const { context } = article ? article : { context: '' }
                this.props.setListContext({
                    index: indexactive,
                    content: context
                })
                if (context != content) this.setState({ content: context })
            })
        }
    }
    componentDidUpdate = () => {
        this.getContent()
    }
    componentDidMount = () => {
        this.getContent()
        const ismoble = isMobile.call(window)
        if (ismoble) {
            this.props.computeListWidth(window.innerWidth)
        } else {
            const dLst = document.querySelector(`.dnb-blog-datalist`)
            const wDLst = dLst ? dLst.offsetWidth : window.innerWidth
            this.props.computeListWidth(wDLst)
        }
        console.log(`DataContentContainer`)
    }
    componentWillUnmount = () => {
        this.props.computeListWidth(window.innerWidth)
    }
    render() {
        const { content } = this.state
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <DataContentView article={this.getArticle()}
                    content={content} />
            </Suspense>
        )
    }
}
const mapStateToProps = (state) => ({
    indexactive: state.blog.Index,
    listdata: state.data.ListData,
    listcontext: state.context,
});
const mapDispatchToProps = {
    setListContext,
    computeListWidth,
}
export const DataContentProvider = connect(
    mapStateToProps,
    mapDispatchToProps)(DataContentContainer)