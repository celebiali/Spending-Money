import './App.css';
import {useState, useEffect} from "react";
import Header from "./components/Header/Header";
import products from './products.json'
import Product from "./components/Product/Product";

function App() {

    const [money, setMoney] = useState(100)
    const [basket, setBasket] = useState([])

    useEffect(()=> {
        console.log(basket)
    },[basket])

    return (
    <>
      <Header money={money}/>
        {products.map(product => (
            <Product key={product.id} basket={basket} setBasket={setBasket} product={product}/>
        ))}
    </>
  );
}

export default App;
