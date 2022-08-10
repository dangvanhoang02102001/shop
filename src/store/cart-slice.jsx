import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addItemToCart: (state,action) => {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++
            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    price: newItem.price,
                    qty: 1,
                    image: newItem.image,
                    description: newItem.description,
                    totalPrice: newItem.price,
                })
            }else{
                existingItem.qty++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart: (state,action) => {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            if(existingItem.qty === 1) {
                state.items = state.items.filter(item => item.id !== id)
            }else {
                existingItem.qty--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice