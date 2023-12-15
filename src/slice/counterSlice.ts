import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    id: number,
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
            const existingCounter = state.counterList.find(counter => counter.name === action.payload);
            if (!existingCounter) {
                state.counterList.push({
                    id: state.counterList.length + 1,
                    count: 0,
                    lock: false,
                    name: action.payload
                });
            }
        },
        deleteCounter: (state, action: PayloadAction<string>) => {
            state.counterList = state.counterList.filter(counter => counter.name !== action.payload)
        },
    },
})

export const { increment, decrement, lock, unlock, addCounter, deleteCounter } = counterSlice.actions

export default counterSlice.reducer