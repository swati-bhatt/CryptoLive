import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import arrow_icon from '../assets/arrow_icon.png'
import {CoinContext} from '../context/CoinContext'
import { useContext } from 'react'

const Navbar = () => {
  const {setCurrency}= useContext(CoinContext)

  const CurrencyHandler =(event)=>{
    switch (event.target.value){
      case "usd":{
        setCurrency({name:"usd", symbol:"$"});
        break;
      }
      case "eur":{
        setCurrency({name:"eur", symbol:"€"});
        break;
      }
      case "inr":{
        setCurrency({name:"inr", symbol:"₹"});
        break;
      }
     default: {
        setCurrency({name:"usd", symbol:"$"});
        break;
      } 
    }
  }
  return (
    <div className='navbar'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className='nav-right'>
            <select onChange={CurrencyHandler}>
            {/* <select> */}
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign UP <img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar