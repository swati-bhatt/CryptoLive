import React, { useContext,useEffect, useState } from 'react'
import './home.css'
import {CoinContext} from '../context/CoinContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const {allCoin, currency}=useContext(CoinContext);
    const [displayCoin, setDisplayCoin]=useState([]);
    const [input,setInput] =useState('');

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])

    const inputHandler =(event)=>{
        setInput(event.target.value);
        if(event.target.value===""){
            setDisplayCoin(allCoin);
        }
    }

    const searchHandler= async(event)=>{
        event.preventDefault();
       const coins = await allCoin.filter((item)=>{
           return item.name.toLowerCase().includes(input.toLowerCase())
        })
        setDisplayCoin(coins);
    }

  return (
    <div className='home'>
        <div className='hero'>
            <h1>Largest <br /> Crypto Marketplace</h1>
            <p>
                Welcome to the World's largest CryptoCurrency MarketPlace.
                Sign Up to Explore More about Cryptos.
            </p>
            <form onSubmit={searchHandler}>



                <input onChange={inputHandler} list='coinList' value={input} type="text" placeholder='Search Crypto...' required />
                <datalist id='coinList'>
                        {allCoin.map((item, index)=>(<option key={index} value={item.name}/>))}
                </datalist>


                <button type='submit'>Search</button>
            </form>
        </div>

        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>Change% 24hr</p>
                <p className='market-cap'>Market Cap</p>
            </div>
            {
                displayCoin.slice(0,25).map((item,index)=>(
                    <Link to={`/Coin/${item.id}`}className="table-layout" key={index}>
                        <p>{item.market_cap_rank }</p>
                        <div>
                            <img src={item.image} alt="" />
                            <p>{item.name+"-"+item.symbol}</p>
                        </div>
                        <p>
                            {currency.symbol}{item.current_price.toLocaleString()}</p>
                        <p className={item.price_change_percentage_24h>0?"green":"red"} style={{textAlign:"center"}}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                        <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                    </Link>
                ))
            }
        </div>
        </div>
  )
}

export default Home