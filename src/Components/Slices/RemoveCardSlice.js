import { createSlice } from "@reduxjs/toolkit";

const RemoveCard = createSlice({
    name: 'remove_card',
    initialState: {
        items: []
    },
    reducers: {
        removethecard: (state, action) => {
            // // state.items = state.items.filter((item) => item.id !== action.payload.id)
            // // state.items.push(state.items.filter((item) => item.id !== action.payload.id))
            // console.log(action.payload.id)
            // // state.items.find(action.payload.id) ?
            // // state.items = state.items.splice(action.payload.id, 1, 0, action.payload.id + 1)
            // const findeditem = state.items.find(action.payload.id)
            // console.log(findeditem);

            const { index } = action.payload;
            if (index < state.items.length - 1) {
                // Replace the card at index with the next one
                state.items[index] = state.items[index + 1];
            }
        }
    }
})

export const { removethecard } = RemoveCard.actions
export default RemoveCard.reducer