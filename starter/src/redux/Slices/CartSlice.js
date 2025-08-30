import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

// Export actions to use in components
export const { add, remove } = CartSlice.actions;

// Export reducer to configure store
export default CartSlice.reducer;