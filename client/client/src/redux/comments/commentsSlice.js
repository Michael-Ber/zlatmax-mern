import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    isLoading: false,
    isError: false
};

const URL = "http://localhost:3005/good/comments"

export const getComments = createAsyncThunk(
    'comments/getComments',
    async() => {
        try {
            const resp = await fetch(URL)
            return await resp.json();
        } catch (error) {
            console.log(error)
        }
    }
)

export const addComment = createAsyncThunk(
    'comments/addComment',
    async({text, goodId}) => {
        try {
            
            const resp = await fetch(`${URL}/add_comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem('token')
                },
                body: JSON.stringify({text, goodId})
            })
            const respJSON = await resp.json();
            console.log(respJSON);
            return respJSON
        } catch (error) {
            console.log(error)
        }
    }
)

export const removeComment = createAsyncThunk(
    'comments/removeComment',
    async({commentId}) => {
        try {
            const resp = await fetch(`${URL}/remove_comment`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem('token')
                },
                body: JSON.stringify(commentId)
            })
            return await resp.json()
        } catch (error) {
            console.log(error)
        }
    }
)

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: {
        //GET COMMENTS
        [getComments.pending]: (state) => { state.loading = true },
        [getComments.fulfilled]: (state, action) => { state.isLoading = false; state.isError = false; state.comments = action.payload },
        [getComments.rejected]: (state) => { state.isLoading = false; state.isError = true },

        //ADD COMMENT
        [addComment.pending]: (state) => { state.loading = true },
        [addComment.fulfilled]: (state, action) => { state.isLoading = false; state.isError = false; state.comments.push(action.payload) },
        [addComment.rejected]: (state) => { state.isLoading = false; state.isError = true },

        //REMOVE COMMENT
        [removeComment.pending]: (state) => { state.loading = true },
        [removeComment.fulfilled]: (state, action) => { state.isLoading = false; state.isError = false; state.comments.filter(item => item._id !== action.payload.id) },
        [removeComment.rejected]: (state) => { state.isLoading = false; state.isError = true },
    }
});

const { reducer } = commentsSlice;
export default reducer;