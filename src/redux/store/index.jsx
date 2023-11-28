import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice";
import userReducer from "../slices/userSlice";
import postReducer from "../slices/postSlice";

export default configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer,
        post: postReducer,
    }
});