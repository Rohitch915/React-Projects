import { createSlice } from "@reduxjs/toolkit"

const privacySlice = createSlice({
    name: "privacy",
    initialState: false,
    reducers: {
        privacy: (store) => {

            return store = !store

        }
    }
})

export const privacyAction=privacySlice.actions;

export default privacySlice;