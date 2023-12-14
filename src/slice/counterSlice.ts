import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    count: number,
    lock: boolean,
    name: string
}

const initialState: {
    counterList: CounterState[]
} = {
    counterList: []
}

export const counterSlice = createSlice({
    name: 'counterList',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<string>) => {
            state.counterList = state.counterList.map(data =>
                data.name == action.payload ? { ...data, count: data.count + 1 } : data
            )
        },
        decrement: (state, action: PayloadAction<string>) => {
            state.counterList = state.counterList.map(data =>
                data.name == action.payload ? { ...data, count: data.count - 1 } : data
            )
        },
        unlock: (state, action: PayloadAction<string>) => {
            state.counterList = state.counterList.map(data =>
                data.name == action.payload ? { ...data, lock: false } : data
            )
        },
        lock: (state, action: PayloadAction<string>) => {
            state.counterList = state.counterList.map(data =>
                data.name == action.payload ? { ...data, lock: true } : data
            )
        },
        addCounter: (state, action: PayloadAction<string>) => {
            const newCounter: CounterState = {
                name: action.payload,
                count: 0,
                lock: false
            };
            state.counterList = [...state.counterList, newCounter]
        },
    },
})

export const { increment, decrement, lock, unlock, addCounter } = counterSlice.actions

export default counterSlice.reducer