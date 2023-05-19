import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    goods: [],
    cort: [],
    isLoading: false, 
    isError: false
};

const URL = "http://localhost:3005";

export const getGoods = createAsyncThunk(
    'goods/fetchGoods',
    async() => {
        const resp = await fetch("http://localhost:3005");
        return await resp.json();
    }
);

export const addToCort = createAsyncThunk(
    'cort/addToCort',
    async({goodId}) => {
        try {
            const resp = await fetch(`${URL}/cort`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token")
                },
                body: JSON.stringify({goodId})
            })
            const respJSON = await resp.json();
            console.log(respJSON);
            return respJSON;
        } catch (error) {
            console.log(error)
        }
    }
);

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {},
    extraReducers: {
        //Getting goods from db
        [getGoods.pending]: state => { state.isLoading = true },
        [getGoods.fulfilled]: ( state, action ) => { state.isLoading = false; state.isError = false; state.goods =  action.payload.goods},
        [getGoods.rejected]: state => { state.isLoading = false; state.isError = true },
        //add good to users cort
        [addToCort.pending]: state => { state.isLoading = true },
        [addToCort.fulfilled]: (state, action) => { state.isLoading = false; state.isError = false; state.cort.push(action.payload.item) },
        [addToCort.pending]: state => { state.isLoading = false; state.isError = true },
    }
});

const { reducer } = goodsSlice;
export default reducer;