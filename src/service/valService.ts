import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface calModel {
    val: string
}

const initialState:calModel = {
    val: '1'
}

const valService = createSlice(
    {
        name: "calVal",
        initialState,
        reducers: {
            addVal(state, action: PayloadAction<calModel>) {
                state.val = action.payload.val
            }
        }
    }
)

export const {addVal} = valService.actions
export default valService.reducer