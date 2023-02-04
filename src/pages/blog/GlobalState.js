import { configureStore, createSlice } from '@reduxjs/toolkit'

const featureSlice = createSlice({
    name: 'BlogArticle',
    initialState: {
        Name: '',
        Index: -1
    },
    reducers: {
        setArticleName: (state, action) => {
            state.Name = action.payload
        },
        setIndex: (state, action) => {
            state.Index = action.payload
        },
    },
})
const { actions, reducer } = featureSlice

export const { setArticleName, setIndex } = actions

export const BlogArticle = configureStore({
    reducer: { reducer },
})