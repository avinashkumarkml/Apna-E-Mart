




import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cartData, getApData, getApFilData, getData, getElData } from "../../redux/action"
import "./appliances.css"

export const Appliances =()=>{
    const {appliances} =useSelector((store)=>store.appliances)
    const filappliances =useSelector((store)=>store.appliances.filappliances)
    const dispatch =useDispatch()
    const navigate =useNavigate()
    useEffect(()=>{
       axios.get("https://e-mart-7352.herokuapp.com/appliances").then((res)=>{
          // console.log(res.data)
           dispatch(getApData(res.data))
       })
    },[])
    const handleSort=(e)=>{
        let {id,value} =e.target
            if(id =="priceSort" && value =="low"){
                appliances.sort((a,b)=>a.price.split(",").join("") -b.price.split(",").join(""))
                dispatch(getApData(appliances))
            }
            if(id =="priceSort" && value =="high"){
                appliances.sort((a,b)=>b.price.split(",").join("")  -a.price.split(",").join("") )
                dispatch(getApData(appliances))
            }
            if(id =="filterCategory"){
              //  console.log(value,"a")
                  dispatch(getApFilData(value))
              }
    }
    const handlecart =(e)=>{
        //  console.log(e)
          axios.post("https://e-mart-7352.herokuapp.com/cart",e).then(()=>{
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
                <option value="Television">filter by Television</option>
                <option value="refrigerator">filter by refrigerator</option>
                <option value="washing machine">filter by washing machine</option>
             
            </select>
        </div>
        <div className="apl_container">
            {appliances &&filappliances.map((e)=>(
                <div>
                <div key={e._id} onClick={()=>navigate(`/Appliances/product_details/${e._id}`)}>
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