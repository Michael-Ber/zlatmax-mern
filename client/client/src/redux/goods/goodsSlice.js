import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    goods: [],
    isLoading: false, 
    isError: false
};

export const getGoods = createAsyncThunk(
    'goods/fetchGoods',
    async() => {
        const resp = await fetch("http://localhost:3005");
        return await resp.json();
    }
);

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {},
    extraReducers: {
        [getGoods.pending]: state => { state.isLoading = true },
        [getGoods.fulfilled]: ( state, action ) => { state.isLoading = false; state.isError = false; state.goods =  action.payload.goods},
        [getGoods.rejected]: state => { state.isLoading = false; state.isError = true },
    }
});

const { reducer } = goodsSlice;
export default reducer;