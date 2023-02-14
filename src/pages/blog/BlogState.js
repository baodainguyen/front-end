import {
    configureStore,
    createSlice
} from '@reduxjs/toolkit'

//https://redux.js.org/tutorials/essentials/part-4-using-data
const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        Index: -1,
    },
    reducers: {
        setArticleCurrent: (state, action) => {
            const { index } = action.payload
            state.Index = index
        },
    }
})
const dataSlice = createSlice({
    name: 'Data',
    initialState: {
        ListData: [],   //[{title, auth, img}]
        ListComputeWidth: [],   //[width]
        ListWidth: [],           // [width]
        ListLastIndexEachRow: [],
    },
    reducers: {
        setListData: (state, action) => {
            const lstData = action.payload
            if (!Array.isArray(lstData)) return
            lstData.forEach(d => {
                state.ListData.push(d)
                state.ListWidth.push(248)
                state.ListComputeWidth.push(450)
            })
        },
        computeListWidth: (state, action) => {
            const w = action.payload - 24   //.dnb-blog-datalist padding-right and left:12px
            if (state.ListWidth.length) {
                computedListFitWith.call(state, w, state.ListWidth)
            }
        },
        updateWidthItem: (state, action) => {
            const { index, width, viewwidth } = action.payload
            const lstW = state.ListWidth
            if (-1 < index && index < lstW.length && lstW[index] < 249) {
                state.ListWidth.splice(index, 1, width)
                computedListFitWith.call(state, viewwidth, state.ListWidth)
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
export const { setArticleCurrent } = blogSlice.actions
export const { computeListWidth,
    setListData, updateWidthItem } = dataSlice.actions
export const { setListContext } = contextSlice.actions
const customMiddleware = store => next => action => {
    switch (action.type) {
        case 'blog/setArticleCurrent':
            //const prevIndex = store.getState().blog.Index
            //const newIndex = action.payload.index            
            break
        case 'Data/updateWidthItem':

            break
    }
    console.log(`middleware`, action)
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
    const { ListComputeWidth, ListLastIndexEachRow } = this
    if (!Array.isArray(listWidth)) return []
    const ismoble = isMobile(viewWidth)
    ListLastIndexEachRow.splice(0)
    ListComputeWidth.splice(0)
    if (viewWidth <= 414) {
        listWidth.forEach((w, __i) => {
            ListComputeWidth.push(viewWidth - 6)
            ListLastIndexEachRow.push(__i)
        })
    } else {
        const maxW = 561989
        let tW = 0, minW = maxW, minI = -1, maxI1Row = 0
        for (let i = 0, j = 0, len = listWidth.length; j < len; i++) {
            const widthJ = listWidth[++j]
            if (j >= len) break
            const widthI = listWidth[i]
            if (widthI < minW) {
                minW = widthI
                minI = i
            }
            tW += widthI
            const dW = viewWidth - tW
            if (widthJ > dW) {
                if (maxI1Row < i) maxI1Row = i + 1 - maxI1Row
                if (ismoble) ListLastIndexEachRow.push(i)
                ListComputeWidth.push(widthI)
                const newMinW = ListComputeWidth[minI] + dW - maxI1Row * 6
                ListComputeWidth[minI] = newMinW < 249 ? 249 : newMinW
                if (newMinW < 249) {
                    ListComputeWidth[minI] = 249
                    let mMinW = maxW, mMinI = -1, ttW = 0
                    for (let x = i - maxI1Row + 1; x <= i; x++) {
                        if (mMinW > ListComputeWidth[x] && ListComputeWidth[x] > 249) {
                            mMinW = ListComputeWidth[x]
                            mMinI = x
                        }
                        ttW += ListComputeWidth[x]
                    }
                    const ddW = viewWidth - ttW - maxI1Row * 6 + 2
                    if (ddW > 0) {
                        ListComputeWidth[mMinI] -= ddW
                    } else if (ddW < 0) {
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
                if (ismoble) ListLastIndexEachRow.push(j)
            }
        }
    }
    // if(listWidth.length == ListLastIndexEachRow.length) {
    //     ListLastIndexEachRow.splice(0)
    // }
}
export function isMobile(viewWidth) {
    const w = viewWidth || this.innerWidth
    return w < 906
}