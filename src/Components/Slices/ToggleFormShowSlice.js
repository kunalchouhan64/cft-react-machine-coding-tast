import { createSlice } from "@reduxjs/toolkit";

const ToggleForm = createSlice({
    name: 'toggleformshow',
    initialState: {
        default: false
    },
    reducers: {
        handletoggleformshow: (state, action) => {
            // changing the state with payload we get from dispatch function
            state.default = action.payload
        },

    }
})

export const { handletoggleformshow } = ToggleForm.actions
export default ToggleForm.reducer