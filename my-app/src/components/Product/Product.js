import React, {useEffect} from "react";
import "./Product.css"

function Product({product,total,money,basket,setBasket}){

    const basketItem = basket.find(item => item.id === product.id)

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1;
        if (currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
    }else {
            setBasket([...basketWithoutCurrent,currentBasket])
        }
    }
    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        //ürün daha önce eklenmiş
        if(checkBasket){
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
        } else {
             setBasket([...basket,{
                 id:product.id,
                 amount:1
             }])
        }

    }

    return(
        <>
            <div className="product">
                <h3>{product.title}</h3>
                <div className="price">${product.price}</div>
                <div className="actions">
                    <button disabled={!basketItem} onClick={removeBasket}>-</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button disabled={total + product.price > money} onClick={addBasket}>+</button>
                </div>
            </div>
        </>
    )

}


export default Product