import React, { useState } from 'react';
import {generatePublicUrl} from '../../../urlConfig';
import './style.css';

/**
* @author
* @function CartItem
**/

const CartItem = (props) => {

    const [qty,setQty]=useState(props.cartItem.qty);

    const {
        _id,name,price,img
    }=props.cartItem;

    const onQuantityIncrement=()=>{
        setQty(qty+1);
        props.onQuantityInc(_id,qty+1);
    }
    const onQuantityDecrement=()=>{
        if(qty <= 1) return;
        setQty(qty-1);
        props.onQuantityDec(_id,qty-1);
    }

  return(
    <div className="cartItemContainer">
        <div className="flexRow">
            <div className="cartProImgContainer">
                <img src={generatePublicUrl(img)} alt={''}/>
            </div>
            <div className="cartItemDetails">
                <div>
                    <p>{name}</p>
                    <p>Rs. {price}</p>
                </div>
                <div>Entrega en 3 - 5 días</div>
            </div>
        </div>
        <div style={{
            display:'flex',
            margin:'5px 0'
        }}>
            {/* control de cantidad */}
            <div className="quantityControl">
                <button onClick={onQuantityDecrement}>-</button>
                <input value={qty} readOnly />
                <button onClick={onQuantityIncrement} >+</button>
            </div>
            <button className="cartActionBtn">Guardar para más tarde</button>
            <button 
                className="cartActionBtn"
                onClick={()=>props.onRemoveCartItem(_id)}
            >Borrar</button>
        </div>
    </div>
   )

 }

export default CartItem;