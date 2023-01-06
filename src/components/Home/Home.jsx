import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartData } from "../../redux/action";
import { Caro } from "./caraosel/caraosel";
import "./home.css";

export const Home = () => {
  const navigate = useNavigate();
  const [cloth, setCloth] = useState([]);
  const [electronic, setElectronic] = useState([]);
  const [appliance,setAppliance] =useState([])
  const [book,setBook] =useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(" https://e-mart-7352.herokuapp.com/cloth").then((res) => {
      //  console.log(res.data)
      let x = res.data.slice(0, 3);
      // console.log(x)
      setCloth(x);
    });
  }, []);
  useEffect(() => {
    axios.get(" https://e-mart-7352.herokuapp.com/electronics").then((res) => {
      //  console.log(res.data)
      let x = res.data.slice(0, 3);
      // console.log(x)
      setElectronic(x);
    });
  }, []);
  useEffect(() => {
    axios.get(" https://e-mart-7352.herokuapp.com/appliances").then((res) => {
      //  console.log(res.data)
      let x = res.data.slice(0, 3);
      // console.log(x)
      setAppliance(x);
    });
  }, []);
  useEffect(() => {
    axios.get(" https://e-mart-7352.herokuapp.com/books").then((res) => {
      //  console.log(res.data)
      let x = res.data.slice(0, 3);
      // console.log(x)
      setBook(x);
    });
  }, []);
  const handlecart = (e) => {
    //  console.log(e)
    axios
      .post(" https://e-mart-7352.herokuapp.com/cart", e)
      .then(() => {
        //   alert("added to cart")

        dispatch(cartData());
      })
      .catch((e) => {
        console.log(e.message);
        alert("Cart already have same item");
      });
    // console.log({cart})
  };
  return (
    <div>
      <Caro />

      <div className="prod_div">
        <div className="view_div">
          <h2>Clothing Products</h2>
          <button onClick={() => navigate("/Cloth")}>View all</button>
        </div>

        <div className="products">
          {cloth.map((e) => (
            <div>
              <div
                key={e._id}
                onClick={() => navigate(`/Cloth/product_details/${e._id}`)}
              >
                <img src={e.image} />
                <h3>{e.name}</h3>
                <h4>₹ {e.price}.00</h4>
              </div>
              <div>
                <button onClick={() => handlecart(e)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{height:"520px"}} className="prod_div">
      <div className="view_div">
          <h2>Electronics Products</h2>
          <button onClick={() => navigate("/Electronics")}>View all</button>
        </div>

        <div  className="products">
          {electronic.map((e) => (
            <div>
              <div
                key={e._id}
                onClick={() => navigate(`/Electronics/product_details/${e._id}`)}
              >
                <img style={{width:"44%",marginLeft:"24%"}} src={e.image} />
                <h3>{e.name}</h3>
                <h4>₹ {e.price}.00</h4>
              </div>
              <div>
                <button onClick={() => handlecart(e)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{height:"540px"}} className="prod_div">
      <div className="view_div">
          <h2>Appliances </h2>
          <button onClick={() => navigate("/Appliances")}>View all</button>
        </div>

        <div className="products">
          {appliance.map((e) => (
            <div>
              <div
                key={e._id}
                onClick={() => navigate(`/Appliances/product_details/${e._id}`)}
              >
                <img style={{width:"84%",marginLeft:"4%"}} src={e.image} />
                <h3>{e.name}</h3>
                <h4>₹ {e.price}.00</h4>
              </div>
              <div>
                <button onClick={() => handlecart(e)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="prod_div">
      <div className="view_div">
          <h2>Books </h2>
          <button onClick={() => navigate("/Books")}>View all</button>
        </div>

        <div className="products">
          {book.map((e) => (
            <div>
              <div
                key={e._id}
                onClick={() => navigate(`/Books/product_details/${e._id}`)}
              >
                <img style={{width:"84%",marginLeft:"4%"}} src={e.image} />
                <h3>{e.name}</h3>
                <h4>₹ {e.price}.00</h4>
              </div>
              <div>
                <button onClick={() => handlecart(e)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
