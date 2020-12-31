import React from 'react'
import { combineReducers } from 'redux'
import SearchReducer from './SearchSlice'

const RootReducer=combineReducers({
    SearchReducer:SearchReducer
})

export default RootReducer