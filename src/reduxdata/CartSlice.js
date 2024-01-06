import { createSlice } from "@reduxjs/toolkit";
var initvalue = []
var localdata = localStorage.getItem('mydata')
if (localdata != undefined)
initvalue = JSON.parse(localdata).carts
const cartSlice = createSlice({
    name : 'cart',
    initialState:{
        value : initvalue.value
    },
    reducers : {
        addProduct : (state,action)=>{
            var ob = { product : action.payload , qty : 1 }            
            state.value = [...state.value,ob]
        },
        delProduct : (state,action)=>{
            var pid = action.payload.pid
            state.value = state.value.filter(item=>item.product.pid!=pid)
        },
        incrementQty : (state,action)=>
        {
         var pid = action.payload.pid 
         state.value.map(item=>{
            if(item.product.pid==pid)
            item.qty++
            return item;
         })
        },
        decrementQty : (state,action)=>{
            var pid = action.payload.pid
            state.value.map(item=>{
                if(item.product.pid==pid && item.qty>1)
            item.qty--
           return item;
              })
        },
    }
})

export const {addProduct,delProduct,incrementQty,decrementQty} = cartSlice.actions

export default cartSlice.reducer;