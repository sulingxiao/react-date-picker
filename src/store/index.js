import { configureStore } from "@reduxjs/toolkit"
import date from "./modules/date"

export default configureStore({
    reducer: {
        date,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
