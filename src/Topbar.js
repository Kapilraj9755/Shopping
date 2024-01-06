import {useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function Topbar()
{
    const cartSize = useSelector(state=>state.carts.value.length)
    return <div className = "row alert alert-warning">
        <div className = "col-lg-10 col-md-10">
            <h1>SHOPPING MALL 11</h1>
            </div>
            <div className = "col-lg-2 col-md-2">
            <Link to="/"> <i className="fas fa-fw fa-home text-danger"></i>
           </Link>
           &nbsp; &nbsp; &nbsp;
           <Link to="/mycart"> <i className="fas fa-fw fa-shopping-cart text-danger"></i>
           </Link>
           &nbsp;
             <b>{cartSize>0?cartSize:"Empty"}</b>
           </div>

    </div>
}