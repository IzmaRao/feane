'use client';
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaUser  } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { useCart } from "@/app/CartContext"; // Adjust the path as necessary

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart(); // Access cart items
  const [count , setCount] = useState(1);

  const handleOnClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCart = () => {
    setCartOpen(!cartOpen);
    console.log("cart")
  };

  return (
    <nav className="navbar">
      <div className="navbar-head">
        <span className="h">Feane</span>
      </div>


      <ul className="navbar-list">
        <li><Link className="list-link" href="./">Home</Link></li>
        <li><Link className="list-link" href="../menu">Menu</Link></li>
        <li><Link className="list-link" href="../about">About</Link></li>
        <li><Link className="list-link" href="../booktable">Book Table</Link></li>
      </ul>
      <div className="navbar-icons">
        <div><FaUser  size={18} /></div>
        <div onClick={handleCart}><PiShoppingCartSimpleFill size={20} /></div>
        
        {cartOpen && (
          <div className="cart">
            <div className="cart-head">
            
            <div className="cart-head-h">Cart</div>
            <div className="cart-cross">
              <RxCross2 onClick={handleCart} size={24} color="white" />
            </div>

            </div>

            <ul className="cart-products">
              {cart.length === 0 ? (
                <li>Your cart is empty.</li>
              ) : (
                cart.map((item, index) => (
                  <li key={`${item.id}-${index}`} className="cart-item">
                    <div className="cart-item-img">
                    <Image src={item.image} alt={item.name} width={60} height={50} />
                    </div>
                    <div className="cart-item-paras">
                    <div className="cart-item-content">
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </div>

                    <div className="cart-item-content-quantity">
                    <div className="flex gap-4 items-center">
                      <button className="bg-gray-200 rounded-md py-2 px-4" onClick={() => {console.log("clicked");  setCount(count + 1);}}>+</button>
                    </div>
                    <div> 
                      <span>{count}</span>
                    </div>
                    <div>
                      <button className="bg-gray-200 rounded-md py-2 px-4" onClick={() => {console.log("clicked");  if(count > 0) {setCount(count - 1)} else {alert("your value is 0 connot more decremanent it more");setCount(count + 0);}}}>-</button>
                    </div>

                    </div>

                    </div>
                  </li>
                  
                ))
              )}
            </ul>
            <Link href="../ordernow">
            <div>
              <button className='checkout-cart'>
              <p className=''>Order Now</p>
              </button>
            </div>
            </Link>
          </div>
        )}

        <div><FaSearch size={20} /></div>
        <div><button className="navbar-btn">Order Online</button></div>
      </div>

      <div className="navbar-toggle">
        {menuOpen ? (
          <RxCross2 size={32} className="cursor-pointer" onClick={handleOnClick} />
        ) : (
          <FaBars size={32} className="cursor-pointer" onClick={handleOnClick} />
        )}
      </div>
      {menuOpen && (
        <div className="navbar-list-two">
        <ul>
          <li><Link className="list-link" href="./">Home</Link></li>
          <li><Link className="list-link" href="../menu">Menu</Link></li>
          <li><Link className="list-link" href="../about">About</Link></li>
          <li><Link className="list-link" href="../booktable">Book Table</Link></li>
        </ul>
        <div className="navbar-icons-two">
        <div className="navbar-icon-two">
        <div><FaUser  size={18} /></div>
        <div onClick={handleCart}><PiShoppingCartSimpleFill size={20} /></div>
        
        {cartOpen && (
          <div className="cart">
            <div className="cart-head">
            
            <div className="cart-head-h">Cart</div>
            <div className="cart-cross">
              <RxCross2 onClick={handleCart} size={24} color="white" />
            </div>

            </div>

            <ul className="cart-products">
              {cart.length === 0 ? (
                <li>Your cart is empty.</li>
              ) : (
                cart.map((item, index) => (
                  <li key={`${item.id}-${index}`} className="cart-item">
                    <div className="cart-item-img">
                    <Image src={item.image} alt={item.name} width={60} height={50} />
                    </div>
                    <div className="cart-item-paras">
                    <div className="cart-item-content">
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                    </div>

                    <div className="cart-item-content-quantity">
                    <div className="flex gap-4 items-center">
                      <button className="bg-gray-200 rounded-md py-2 px-4" onClick={() => {console.log("clicked");  setCount(count + 1);}}>+</button>
                    </div>
                    <div> 
                      <span>{count}</span>
                    </div>
                    <div>
                      <button className="bg-gray-200 rounded-md py-2 px-4" onClick={() => {console.log("clicked");  if(count > 0) {setCount(count - 1)} else {alert("your value is 0 connot more decremanent it more");setCount(count + 0);}}}>-</button>
                    </div>

                    </div>

                    </div>
                  </li>
                ))
              )}
            </ul>
            <Link href="../ordernow">
            <div>
              <button className='checkout-cart'>
              <p className=''>Order Now</p>
              </button>
            </div>
            </Link>
          </div>
        )}

        <div><FaSearch size={20} /></div>
        </div>
        <div><button className="navbar-btn">Order Online</button></div>
      </div>
        </div>
      )}
      
      
    </nav>
  );
}

export default Navbar;