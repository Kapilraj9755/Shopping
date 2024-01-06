import DummyData from './DummyData'
import { useDispatch } from 'react-redux'
import {addProduct} from './reduxdata/CartSlice'
import { useSelector } from "react-redux"
import ItemQty from './ItemQty'

export default function Products()
{
  const carts = useSelector(state=>state.carts.value)
  const dispatch = useDispatch()
  const add = (ob)=>{
      dispatch(addProduct(ob))
  }
  return <>
       <div className='row'>
        {DummyData.map(ob=> <div className='col-lg-4 col-md-4 text-center'>
            <img src={ob.image} height={200} width={240}/>
            <br/>
            <h4 className='text-danger'>{ob.name}</h4>        
            <h6>Rs. {ob.price}</h6>
            {carts.some(item=>item.product.pid==ob.pid)?<>
            <ItemQty item={carts.find(ct=>ct.product.pid==ob.pid)}/>
            </> :
            <button className='btn btn-info' onClick={()=>add(ob)}>
                <i className="fas fa-fw fa-shopping-cart"></i> &nbsp;
                Add to Cart</button>}
                <br/>
        </div>)}
       </div> 
  </>
}