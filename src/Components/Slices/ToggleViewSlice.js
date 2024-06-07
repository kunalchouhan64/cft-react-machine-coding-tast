import { createSlice } from "@reduxjs/toolkit";

const ToggleView = createSlice({
    name: 'toggleview',
    initialState: {
        default: 'normal_view'
    },
    reducers: {
        handlenormaview: (state, action) => {
            state.default = action.payload
        },
        handlelistview: (state, action) => {
            state.default = action.payload
        },

    }
})

export const {handlelistview, handlenormaview} = ToggleView.actions
export default ToggleView.reducer