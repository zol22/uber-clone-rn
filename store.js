import { configureStore } from '@reduxjs/toolkit'
import navReducer from './slices/navSlice'
import reserveReducer from './slices/reserveSlice'


export const store = configureStore({ 
    reducer: {
        nav: navReducer,
        reserve: reserveReducer
    }
})