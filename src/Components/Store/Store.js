import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../Slices/DataSlice";
import ToggleViewSlice from "../Slices/ToggleViewSlice";
import ToggleFormShowSlice from "../Slices/ToggleFormShowSlice";

const store = configureStore({
    reducer: {
        data: DataSlice,
        toggleview: ToggleViewSlice,
        toggleformshow: ToggleFormShowSlice
    }
})

export default store