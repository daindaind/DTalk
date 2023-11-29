import { createSlice } from "@reduxjs/toolkit";
import { loginActions } from "../actions/loginActions";

export const initialState = {
    loading: false,
    token: "",
    id: 0,
    username: "",
    isLogin: false,
}

const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        logout(state) {
            Object.assign(state, initialState);
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginActions.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginActions.fulfilled, (state, { payload }) => {
                // console.log(payload);
                const token = payload.token;
                const username = payload.username;
                const id = payload.id;
                localStorage.setItem("accessToken", token);
                localStorage.setItem("username", username);
                state.token = token;
                state.username = username;
                state.id = id;
                state.loading = false;
                state.isLogin = true;
            })
            .addCase(loginActions.rejected, (state, { payload }) => {
                // console.log(payload);
                state.loading = false;
            });
    }
});

export const { logout, login } = loginSlice.actions;
export default loginSlice.reducer;