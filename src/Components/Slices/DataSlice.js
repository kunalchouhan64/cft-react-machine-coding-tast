import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
    name: 'data',
    initialState: {
        items: []
    },
    reducers: {
        adddata: (state, action) => {
            state.items.push(action.payload)
        },
        removecard: (state, action) => {
            // state.items = state.items.filter((item) => item.id !== action.payload.id)
            // state.items.push(state.items.filter((item) => item.id !== action.payload.id))
            console.log(action.payload)
            // state.items.find(action.payload.id) ?
            // state.items = state.items.splice(action.payload.id, 1, 0, action.payload.id + 1)
            // const findeditem = state.items.findIndex(action.payload.id)
            // console.log(findeditem);
            const { index } = action.payload;
            if (index < state.items.length - 1) {
                // Replace the card at index with the next one
                state.items[index] = state.items[index + 1];
            }

        }
    }

})

export const { adddata, removecard } = DataSlice.actions
export default DataSlice.reducer