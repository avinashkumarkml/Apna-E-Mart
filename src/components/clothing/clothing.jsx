import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { cartData, getData, getfilData } from "../../redux/action"
import "./clothing.css"

export const Clothing =()=>{
    const {cloth} =useSelector((store)=>store.cloth)
    const filcloth =useSelector((store)=>store.cloth.filcloth)
    const dispatch =useDispatch()
    const navigate =useNavigate()
    useEffect(()=>{
       axios.get("https://e-mart-7352.herokuapp.com/cloth").then((res)=>{
         //  console.log(res.data)
           dispatch(getData(res.data))
       })
    },[])
    const handleSort=(e)=>{
        let {id,value} =e.target
            if(id =="priceSort" && value =="low"){
                 cloth.sort((a,b)=>a.price -b.price)
                dispatch(getData(cloth))
             //  dispatch(getfilData(value))
            }
            if(id =="priceSort" && value =="high"){
                 cloth.sort((a,b)=>b.price -a.price)
                dispatch(getData(cloth))
               // dispatch(getfilData(value))
            }
            if(id =="filterCategory"){
              //  console.log(value,"a")
                dispatch(getfilData(value))
            }
        
    }
    const handlecart =(e)=>{
      //  console.log(e)
        axios.post(" https://e-mart-7352.herokuapp.com/cart",e).then(()=>{
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
                <option value="">-- sort by price --</option>
                <option value="low">low to high</option>
                <option value="high">high to low</option>
            </select>
            <select name="" id="filterCategory" onChange={handleSort}>
                <option value="">-- filter by category --</option>
                <option value="MEN">filter by men</option>
                <option value="WOMEN">filter by women</option>
            </select>
        </div>
        <div className="container">
            {cloth && filcloth.map((e)=>(
                <div>
                <div key={e._id} onClick={()=>navigate(`/Cloth/product_details/${e._id}`)}>
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