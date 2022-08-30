import {useState} from "react";
import "./Basket.css"
import BasketItem from "./BasketItem";

function Basket({basket,resetBasket,total,products}){
    return(
        <>
            <div className="basket-container container">
                <h3>Alışveriş Detayları</h3>
            <ul>
                {basket.map(item => (
            <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)}/>
            ))
         }
            </ul>
                <div className="total">
                    Toplam: ${total}
                </div>
            <button className="basket-reset" onClick={resetBasket}>Reset</button>
            </div>
        </>
    )
}

export default Basket

