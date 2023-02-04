import { configureStore, createSlice } from '@reduxjs/toolkit'
function setListDataWidth() {
    const { ListDataWidth, ListDataOriginWs, WidthDList, ListDataSize } = this
    if (ListDataSize != ListDataOriginWs.length) return
    ListDataOriginWs.sort((a, b) => a.index - b.index)
    ListDataWidth.splice(0)
    const maxW = 561989
    let tW = 0, minW = maxW, minI = -1
    for (let i = 0, j = i + 1, len = ListDataOriginWs.length; i < len && j < len; i++) {
        const itemI = ListDataOriginWs[i]
        const itemJ = ListDataOriginWs[j]
        const { width } = itemI
        if (width < minW) {
            minW = width
            minI = i
        }
        tW += width
        const dW = WidthDList - tW
        if (itemJ.width > dW) {
            ListDataWidth.push({ index: i, width: width })
            const itemMin = ListDataOriginWs[minI]
            const newMinW = itemMin.width + dW
            ListDataWidth[minI].width = newMinW
            tW = 0
            minW = maxW
            minI = -1
        } else {
            ListDataWidth.push({ index: i, width: width })
        }
        if (j == len - 1) {
            ListDataWidth.push({ index: j, width: itemJ.width })
        }
    }
}
const featureSlice = createSlice({
    name: 'BlogArticle',
    initialState: {
        Name: '',
        Index: -1,
        ListDataSize: 0,
        WidthDList: 0,
        ListDataWidth: [],
        ListDataOriginWs: []
    },
    reducers: {
        setArticleName: (state, action) => {
            state.Name = action.payload
        },
        setIndex: (state, action) => {
            state.Index = action.payload
        },
        setListDataSize: (state, action) => {
            state.ListDataSize = action.payload
        },
        setWidthDataLst: (state, action) => {
            const w = action.payload - 24   // .dnb-blog-datalist padding-right and left:12px
            if (state.WidthDList == w) return
            state.WidthDList = w
            setListDataWidth.call(state)
        },
        setListDataOriginWs: (state, action) => {
            const { index, width } = action.payload
            const { ListDataOriginWs, ListDataSize } = state
            const lstIndex = ListDataOriginWs.map(o => o.index)
            const i = lstIndex.indexOf(index)
            if (i > -1) {
                ListDataOriginWs.splice(i, 1, { index, width })
            } else {
                ListDataOriginWs.push({ index, width })
            }
            setListDataWidth.call(state)
        },
    },
})
const { actions, reducer } = featureSlice

export const { setArticleName, setIndex, setWidthDataLst, setListDataOriginWs, setListDataSize } = actions

export const BlogArticle = configureStore({
    reducer: { reducer },
})