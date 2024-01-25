import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "../features/counter/counterSlice";
import UserSlice from "../features/posts/UserSlice";

const store = configureStore({
    reducer:{
        counter: counterReducer,
        user_card: UserSlice
    }
})
export default store