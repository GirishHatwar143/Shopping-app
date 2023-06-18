import { React } from "react";
import "./Cart.css"
import { useSelector } from "react-redux";
import Additem from "./Additem"

const Cart = () => {
  const cart = useSelector((state) => state.storecart)
  const {cartItems}=cart
  
  let totalBillAmount = cartItems.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);
  const handleClick = () => {
    alert("Your Order Placed !!!");
  };


  return (
    <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
    <div className="main">
      <table className="tablebody" style={{overflowX:'auto'}}>
        <thead>
          <tr className="heading">
            <th>SR.NO</th>
            <th>ITEM</th>
            <th>ITEM-NAME</th>
            <th>QUANTITY</th>
            <th>ITEM-PRICE</th>
            <th>TOTAL</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => {
            return (
              <Additem item={item} index={index}/>
            );
          })}
        </tbody>
      </table>
      <div>

      </div >
      <div className="total">
        <h2>TOTAL BILL AMOUNT = &#8377; {totalBillAmount} </h2>
      </div>
      
      <button className="order-btn" onClick={()=>handleClick()}> Place Order</button>

    </div>
      </div>
  )
}
export default Cart;