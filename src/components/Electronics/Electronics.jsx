

import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cartData, getData, getElData, getElFilData } from "../../redux/action"
import "./electronics.css"

export const Electronics =()=>{
    const {electronics} =useSelector((store)=>store.electronics)
    const filelectronics =useSelector((store)=>store.electronics.filelectronics)
    const dispatch =useDispatch()
    const navigate =useNavigate()
    useEffect(()=>{
       axios.get("https://glamorous-calf-culottes.cyclic.app/electronics").then((res)=>{
          // console.log(res.data)
           dispatch(getElData(res.data))
       })
    },[])
    const handleSort=(e)=>{
        let {id,value} =e.target
            if(id =="priceSort" && value =="low"){
                electronics.sort((a,b)=>a.price.split(",").join("") -b.price.split(",").join(""))
                dispatch(getElData(electronics))
            }
            if(id =="priceSort" && value =="high"){
                electronics.sort((a,b)=>b.price.split(",").join("")  -a.price.split(",").join("") )
                dispatch(getElData(electronics))
            }
            if(id =="filterCategory"){
                //  console.log(value,"a")
                  dispatch(getElFilData(value))
              }
    }
    const handlecart =(e)=>{
        //  console.log(e)
          axios.post("https://glamorous-calf-culottes.cyclic.app/cart",e).then(()=>{
              alert("added to cart")
             // dispatch(addCart(prod))
          })
         // console.log({cart})
          dispatch(cartData())
      } 
    return(
        <>
        <div>
            <select name="" id="priceSort" onChange={handleSort}>
                <option value="">--sort by price--</option>
                <option value="low">low to high</option>
                <option value="high">high to low</option>
            </select>
            <select name="" id="filterCategory" onChange={handleSort}>
                <option value="">-- filter by category --</option>
                <option value="mobile">filter by mobile</option>
                <option value="laptop">filter by laptop</option>
            </select>
        </div>
        <div className="el_container">
            {electronics&& filelectronics.map((e)=>(
                <div>
                <div key={e._id} onClick={()=>navigate(`/Electronics/product_details/${e._id}`)}>
                    <img src={e.image} />
                    <h3>{e.name}</h3>
                    <h4>₹ {e.price}.00</h4>
                </div>
                        <div >

                        <button onClick={ ()=>handlecart(e)} >Add to cart</button>
                        </div>
                </div>
            ))}
        </div>
        </>
    )
      
    
}