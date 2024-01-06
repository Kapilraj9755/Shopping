import { useDispatch } from "react-redux"
import { incrementQty , decrementQty, delProduct } from "./reduxdata/CartSlice"

export default function ItemQty (props)

{
    const dispatch = useDispatch()
    const increment = ()=> {
        dispatch(incrementQty({pid:props.item.product.pid}))
    }
    const decrement = ()=> {
      dispatch(decrementQty({pid:props.item.product.pid}))
    } 
    const deleteItem = ()=> {
        dispatch(delProduct({pid:props.item.product.pid}))
      } 
    
 return <div>
    <button className=" btn btn-info" onClick={decrement}> - </button> &nbsp; &nbsp; 
  <b> {props.item.qty} </b> &nbsp;&nbsp; &nbsp; 
  <button className=" btn btn-info" onClick={increment}> + </button> 
  &nbsp; &nbsp; 
  <button className=" btn btn-warning" onClick={deleteItem}> 
  <i className="fas fa-fw fa-trash text-danger"></i>
  </button>
  
 </div>

}