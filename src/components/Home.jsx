import React from "react";
import "./Home.css";
import { useState, useEffect } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store/storeSlice"


const Home = () => {
  const [data, setData] = useState([])
  const [filldata, setFilldata] = useState([])
  const selector = useSelector((state) => state.storecart)
  const { cartItems } = selector
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`)
      .then((res) => {
        setData(res.data.products)
        setFilldata(res.data.products)
      })
      .catch(err => console.log(err))
  }, []);

  const handleClick = (item) => {
    dispatch(addToCart(item));
  }
  const SearchProduct = (e) => {

    setFilldata(data.filter(f =>
      f.title.toLowerCase().includes(e.target.value)))
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', flexWrap: 'wrap', margin: 'auto' }} >
      {console.log(data)}

      <div className="SearchProductContainer" >

        <span><input className="searchBar" placeholder="&#128270; Search Products... " onChange={SearchProduct} /></span>

      </div>


      <div className="mainContainer">
        {filldata.map((item, index) =>
          <div className="container">
            <div>
              <img src={item.thumbnail} alt="images" className="Homeimg" />
            </div>
            <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
              <span style={{ padding: "20px", margin: "20px", }}>
                {item.title}</span> <br />
              Price : $ {item.price}
            </div>
            <button className="btn" onClick={() => handleClick(item)} >Add To Cart</button>
            <div>

            </div>


          </div>


        )}
      </div>
    </div>
  )
}
export default Home;