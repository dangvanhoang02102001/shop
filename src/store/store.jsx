import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import userSlice from "./user-slice";
// import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {
        // ui: uiSlice.reducer,
        cart: cartSlice.reducer,
        user: userSlice.reducer
    }
})

export default store