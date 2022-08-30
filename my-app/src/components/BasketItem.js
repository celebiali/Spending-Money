import {useState} from "react";
import "./BasketItem.css"

function BasketItem({item, product}) {
    return(
        <>
        <li className="basket-item">
            {product.title} x <span>{item.amount}</span>
        </li>
        </>
    )
}

export default BasketItem