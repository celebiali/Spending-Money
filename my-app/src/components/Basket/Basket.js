import {useState} from "react";
import "./Basket.css"
import BasketItem from "../BasketItem/BasketItem";

function Basket({basket,resetBasket,total,products}){
    return(
        <>
         {basket.map(item => (
            <BasketItem item={item} product={products.find(p => p.id === item.id)}/>
            ))
         }
                <div>
                    Toplam: ${total}
                </div>
            <button onClick={resetBasket}>Reset</button>
        </>
    )
}

export default Basket

