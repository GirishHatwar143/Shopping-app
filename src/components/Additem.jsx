import React from "react"
import {  useDispatch } from "react-redux";
import { VscTrash,VscRemove,VscAdd } from "react-icons/vsc";
import { removeCart,decriment,incriment } from "./Store/storeSlice"
import "./Cart.css"

export default function Additem({item,index}){


  
  
  const dispatch = useDispatch();



  const handleIncriment = (item) => {
   
       dispatch(incriment(item))
 
      
  }
  
  const handleDecriment = (item) => {
      dispatch(decriment(item))
  }
  const removeItem = (id) => {
    dispatch(removeCart(id))
  }

 

  return(
    <>
       <tr key={item.id} className="border_bottom">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    width="200px"
                    height="150px"
                  /> </td>
                <td>{item.title}</td>
                <td> <button onClick={() => handleDecriment(item)} className="icon"> <VscRemove/>  </button>
                  {item.quantity}
                  <button onClick={() => handleIncriment(item)} className="icon"> <VscAdd/>  </button>
                </td>

                <td>{item.price}</td>
                <td>{item.quantity * item.price}</td>
                <td> <i onClick={() => removeItem(item.id)} className="icon-delete"> <VscTrash /> </i> </td>
              </tr>
    
    </>
  )
}