import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "http://localhost:3005/api/auth";

const initialState = {
    user: '',
    message: '',
    token: '',
    isLoading: false,
    isError: false
};

export const register = createAsyncThunk(
    'auth/register',
    async(data) => {
        const resp = await fetch(`${url}/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const respJSON = await resp.json();
        if(respJSON.token) {
            window.localStorage.setItem('token', respJSON.token);
        }
        return respJSON;
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async(data) => {
        const resp = await fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(data)
        });
        const respJSON = await resp.json();
        if(respJSON.token) {
            window.localStorage.setItem('token', respJSON.token);
        }
        return respJSON
    }
);

export const me = createAsyncThunk(
    'auth/me',
    async() => {
        const resp = await fetch(`${url}/me`, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + window.localStorage.getItem('token')
            }
        })
        const respJSON = await resp.json();
        return respJSON;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => { 
            state.user = ''; 
            state.message = ''; 
            state.token = '';
            state.isLoading = false;
            state.isError = false
        }
    },
    extraReducers: {
        //REGISTRATION
        [register.pending]: state => { state.isLoading = true },
        [register.fulfilled]: ( state, action ) => { 
            state.isLoading = false; 
            state.user = action.payload.newUser; 
            state.message = action.payload.message; 
            state.token = action.payload.token; 
        },
        [register.rejected]: state => { state.isLoading = false; state.isError = true },

        //LOGIN
        [login.pending]: state => { state.isLoading = true },
        [login.fulfilled]: ( state, action ) => { 
            state.isLoading = false; 
            state.user = action.payload.user; 
            state.message = action.payload.message; 
            state.token = action.payload.token; 
        },
        [login.rejected]: state => { state.isLoading = false; state.isError = true },

        //GETME
        [me.pending]: state => { state.isLoading = true },
        [me.fulfilled]: ( state, action ) => { 
            state.isLoading = false; 
            state.user = action.payload.user; 
            state.token = action.payload.token; 
        },
        [me.rejected]: state => { state.isLoading = false; state.isError = true },
    }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;