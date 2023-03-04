import React, { useState } from "react";
import "./App.css";
import { Fragment } from "react";
import Navbar from "./components/Navbar";
import './styles/Amazon.css'
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning]=useState(false)

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) 
      isPresent = true;
    });
    if (isPresent) {
      setWarning(true)
      setTimeout(()=>{
        setWarning(false)
      },2000)
      return;
    }
    setCart([...cart, item]);
  };
  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		
    if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
  return (
    <Fragment>
      <Navbar size={cart.length} setShow={setShow} show={show} />
      {
        show ? <Amazon handleClick={handleClick} /> 
        : 
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}  />
      }
      
      
      {
        warning && <div className="warning">item is alredy added to your card</div>
      }
    </Fragment>
  );
}

export default App;
