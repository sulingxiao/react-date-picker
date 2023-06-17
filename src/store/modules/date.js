import { createSlice } from "@reduxjs/toolkit"
import dayjs from "../../utils/day"
export const slice = createSlice({
    name: "date",
    initialState: {
        activeDate: dayjs(),
    },
    reducers: {
        setActiveDate: (state, action) => {
            state.activeDate = action.payload
        },
    },
})

export const { setActiveDate } = slice.actions
export default slice.reducer
