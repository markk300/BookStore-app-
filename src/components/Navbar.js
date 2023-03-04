import React from 'react'
import '../styles/Navbar.css'

const Navbar = ({size,setShow,show}) => {
  return (
    <nav>
    <div className='nav-box'>
        <span className='my_shop' onClick={()=>setShow(true)}>
         My Shoping
        </span>
        <div className='cart' onClick={()=>setShow(false)}>
            <span>
                <i className="fas fa-cart-plus" ></i>
            </span>
            <span>{size}</span>
        </div>
        </div>
        </nav>
  )
}

export default Navbar
