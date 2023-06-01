import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    goods: [],
    order: [],
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
    'goods/addToCort',
    async({goodId, additional = {amount: 1}}) => { 
        try {
            const resp = await fetch(`${URL}/cort`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token")
                },
                body: JSON.stringify({goodId, additional})
            })
            const respJSON = await resp.json();
            return respJSON;
        } catch (error) {
            console.log(error)
        }
    }
);

export const removeItemFromCart = createAsyncThunk(
    'goods/removeItemFromCart',
    async({goodId}) => {
        try {
            const resp = await fetch(`${URL}/cort`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem('token')
                },
                body: JSON.stringify({goodId})
            });
            const respJSON = await resp.json();
            return respJSON;
        } catch (error) {
            console.log(error)
        }
    }
);

export const addToFavorites = createAsyncThunk(
    'goods/addToFavorites',
    async({goodId}) => {
        try {
            const resp = await fetch(`${URL}/favorites`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token")
                },
                body: JSON.stringify({goodId})
            })
            const respJSON = await resp.json();
            return respJSON;
        } catch (error) {
            console.log(error)
        }
    }
);

export const removeItemFromFavorites = createAsyncThunk(
    'goods/removeItemFromFavorites',
    async({goodId}) => {
        try {
            const resp = await fetch(`${URL}/favorites`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem('token')
                },
                body: JSON.stringify({goodId})
            });
            const respJSON = await resp.json();
            return respJSON;
        } catch (error) {
            console.log(error)
        }
    }
);

export const sendOrder = createAsyncThunk(
    'goods/sendOrder',
    async({order}) => {
        try {
            console.log(order);
            const resp = await fetch(`${URL}/order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + window.localStorage.getItem("token")
                },
                body: JSON.stringify(order)
            });
            const respJSON = await resp.json();
            return respJSON;
        } catch (error) {
            console.log(error);
        }
    }
);

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        makeOrder: ( state, action ) => {
            state.order = action.payload;
        },
        removeItemFromOrder: (state, action) => {
            state.order.filter(item => item._id !== action.payload.id)
        }
    },
    extraReducers: {
        //Getting goods from db
        [getGoods.pending]: state => { state.isLoading = true },
        [getGoods.fulfilled]: ( state, action ) => { state.isLoading = false; state.isError = false; state.goods =  action.payload.goods},
        [getGoods.rejected]: state => { state.isLoading = false; state.isError = true },

        //add good to users cart
        [addToCort.pending]: state => { state.isLoading = true },
        [addToCort.fulfilled]: (state, action) => { state.isLoading = false; state.isError = false; },
        [addToCort.pending]: state => { state.isLoading = false; state.isError = true },

        //remove good from user cart
        [removeItemFromCart.pending]: state => { state.isLoading = true },
        [removeItemFromCart.fulfilled]: (state, action) => { state.isLoading = false; state.isError = false},
        [removeItemFromCart.pending]: state => { state.isLoading = false; state.isError = true },

        //add good to favorites
        [addToFavorites.pending]: state => { state.isLoading = true },
        [addToFavorites.fulfilled]: (state, action) => { state.isLoading = false; state.isError = false},
        [addToFavorites.pending]: state => { state.isLoading = false; state.isError = true },

        //remove good from favorites
        [removeItemFromFavorites.pending]: state => { state.isLoading = true },
        [removeItemFromFavorites.fulfilled]: (state, action) => { state.isLoading = false; state.isError = false},
        [removeItemFromFavorites.pending]: state => { state.isLoading = false; state.isError = true },

        //send order
        [sendOrder.pending]: state => { state.isLoading = true },
        [sendOrder.fulfilled]: (state, action) => { state.isLoading = false; state.isError = false},
        [sendOrder.pending]: state => { state.isLoading = false; state.isError = true },

    }
});

const { reducer } = goodsSlice;
export default reducer;

export const { makeOrder, removeItemFromOrder } = goodsSlice.actions;