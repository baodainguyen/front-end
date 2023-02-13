import {
    configureStore,
    createSlice
} from '@reduxjs/toolkit'

//https://redux.js.org/tutorials/essentials/part-4-using-data
const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        IsShowContext: false,
        Index: -1,
    },
    reducers: {
        setArticleCurrent: (state, action) => {
            const { index } = action.payload
            state.Index = index
        },
        showContext: (state, action) => {
            state.IsShowContext = true
        },
        hideContext: (state, action) => {
            state.IsShowContext = false
        },
    }
})
const dataSlice = createSlice({
    name: 'Data',
    initialState: {
        ListData: [],   //[{title, auth, img}]
        Width: -1,
        ListComputeWidth: [],   //[width]
        ListWidth: []           // [width]
    },
    reducers: {
        setListData: (state, action) => {
            const lstData = action.payload
            if (!Array.isArray(lstData)) return
            lstData.forEach(d => {
                state.ListData.push(d)
                state.ListWidth.push(450)
                state.ListComputeWidth.push(450)
            })
        },
        setWidthDataLst: (state, action) => {
            const w = action.payload - 24   // .dnb-blog-datalist padding-right and left:12px
            if (state.Width == w) return
            state.Width = w
            if (state.ListWidth.length) {
                computedListFitWith.call(state, w, state.ListWidth)
            }
        },
        updateWidth: (state, action) => {
            const { index, width } = action.payload
            if (-1 < index && index < state.ListWidth.length) {
                state.ListWidth.splice(index, 1, width)
                computedListFitWith.call(state, state.Width, state.ListWidth)
            }
        }
    }
})
const contextSlice = createSlice({
    name: 'Context',
    initialState: [],   // [index, content: 'string']
    reducers: {
        setListContext: (state, action) => {
            const { index, content } = action.payload
            const item = state.find(c => c.index == index)
            if (item) {
                item.content = content
            } else {
                state.push({ index, content })
            }
        },
    }
})
export const { setArticleCurrent, showContext, hideContext } = blogSlice.actions
export const { setWidthDataLst, setListData, updateWidth } = dataSlice.actions
export const { setListContext } = contextSlice.actions
const customMiddleware = store => next => action => {
    switch (action.type) {
        case 'blog/setArticleCurrent':
            const prevIndex = store.getState().blog.Index
            const newIndex = action.payload.index
            if (-1 < newIndex && prevIndex < 0) {
                store.dispatch(showContext())
            }
            if (-1 < prevIndex && newIndex < 0) {
                store.dispatch(hideContext())
            }
            break;
    }
    return next(action)
}
export const BlogPageArticle = configureStore({
    reducer: {
        blog: blogSlice.reducer,        // export blogSlice.reducer => import {blogReducer}
        context: contextSlice.reducer,   // import {ContextReducer}
        data: dataSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
})


function computedListFitWith(viewWidth, listWidth) {
    const { ListComputeWidth } = this
    if (!Array.isArray(listWidth)) return []
    const listLastIndexEachRow = []
    ListComputeWidth.splice(0)
    const maxW = 561989
    let tW = 0, minW = maxW, minI = -1, maxI1Row = 0
    for (let i = 0, j = i + 1, len = listWidth.length; i < len && j < len; i++) {
        const widthI = listWidth[i]
        const widthJ = listWidth[j]
        if (widthI < minW) {
            minW = widthI
            minI = i
        }
        tW += widthI
        const dW = viewWidth - tW
        if (widthJ > dW) {
            if (maxI1Row < i) maxI1Row = i + 1 - maxI1Row
            listLastIndexEachRow.push(i)
            ListComputeWidth.push(widthI)
            const newMinW = ListComputeWidth[minI] + dW - maxI1Row * 6
            ListComputeWidth[minI] = newMinW < 249 ? 249 : newMinW
            if (newMinW < 249) {
                ListComputeWidth[minI] = 249
                let mMinW = maxW, mMinI = -1, ttW = 0
                for (let x = i - maxI1Row + 1; x <= i; x++) {
                    if(mMinW > ListComputeWidth[x] && ListComputeWidth[x] > 249) {
                        mMinW = ListComputeWidth[x]
                        mMinI = x
                    }
                    ttW += ListComputeWidth[x]
                }
                const ddW = viewWidth - ttW - maxI1Row * 6 + 2
                if(ddW > 0) {
                    ListComputeWidth[mMinI] -= ddW
                } else if(ddW < 0) {
                    ListComputeWidth[mMinI] += ddW - 2
                }
            } else {
                ListComputeWidth[minI] = newMinW
            }
            maxI1Row = i + 1
            tW = 0
            minW = maxW
            minI = -1
        } else {
            ListComputeWidth.push(widthI)
        }
        if (j == len - 1) {      // last item
            ListComputeWidth.push(widthJ)
            listLastIndexEachRow.push(j)
        }
    }
    //console.log(`listLastIndexEachRow`, listLastIndexEachRow)
}
