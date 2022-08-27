import React, {useEffect} from "react";
import "./Product.css"

function Product({product,basket,setBasket}){
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
                    <button>Sell</button>
                    <span className="amount">0</span>
                    <button onClick={addBasket}>Buy</button>
                </div>
            </div>
        </>
    )

}


export default Product