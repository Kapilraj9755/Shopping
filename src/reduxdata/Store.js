import {configureStore } from "@reduxjs/toolkit"
import CartReducer from "./CartSlice"
const store =  configureStore({
    reducer : {
        carts : CartReducer
    }
})
store.subscribe(() =>{localStorage.setItem('mydata',JSON.stringify(store.getState()))  })

export default store;