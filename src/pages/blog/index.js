import React, {
    Component, Suspense,
    useEffect
} from 'react'
import { DataListProvider } from './DataList'
import { DataContext } from './DataContext'
import { Provider, useSelector, connect } from 'react-redux'
import { BlogPageArticle, setListContext, setWidthDataLst } from './GlobalState'
import { getBlogArticle } from '../../service/base'
import './style.scss'

export class Blog extends Component {
    componentDidMount = () => {
        const mainNav = document.querySelector(`#dnbApp .navbar.sticky-top`);
        mainNav.style.display = ''
    }
    render() {
        return (
            <Provider store={BlogPageArticle}>
                <BlogMain />
            </Provider>
        )
    }
}
function BlogMain() {
    const { Index } = useSelector((state) => state.blog)
    const { Width } = useSelector((state) => state.data)
    useEffect(() => {
        //  window.scrollTo(0, 0)
        const dList = document.querySelector(`.dnb-blog-datalist`)
        if (dList) {
            const dContext = dList.querySelector(`.dnb-blog-datacontext`)
            if (dContext) {
                if (-1 < Index) {
                    if (Width + 24 < 906) {
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
                //console.log(`Blog Main width`, dContext.offsetWidth)
            }
        }
    })
    return (
        <main className='dnb-blog-container'>
            {
                Index > -1 && Width + 24 >= 906 ? <DataContextProvider /> : ''
            }
            <DataListProvider />
        </main>
    )
}

export class DataContextWrap extends Component {
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
                this.props.setListContext({ index: indexactive, content: context })
                if (context != content) this.setState({ content: context })
            })
        }
    }
    componentDidUpdate = () => {
        this.getContent()
    }
    componentDidMount = () => {
        this.getContent()
        const dataList = document.querySelector(`.dnb-blog-datalist`)
        const wDataList = dataList ? dataList.offsetWidth : 0
        this.props.setWidthDataLst(wDataList)
    }
    componentWillUnmount = () => {
        this.props.setWidthDataLst(window.innerWidth)
    }
    render() {
        const { content } = this.state
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <DataContext article={this.getArticle()}
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
    setWidthDataLst,
}
export const DataContextProvider = connect(mapStateToProps, mapDispatchToProps)(DataContextWrap)