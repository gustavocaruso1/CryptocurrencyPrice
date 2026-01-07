import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'

const Navbar = () => {

    
    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event)=>{
        switch (event.target.value){
            case "usd":{
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
            case "brl":{
                setCurrency({name: "brl", symbol: "R$"});
                break;
            }
           default: {
                setCurrency({name: "usd", symbol: "$"});
                break;
            }
        }
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li>Início</li>
                <li>Features</li>
                <li>Preços</li>
                <li>Blog</li>
            </ul>
            <div className='nav-right'>
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="brl">BRL</option>
                </select>
                <button>
                    Cadastre-se <img src={arrow_icon} alt="" />
                </button>
            </div>
        </div>
    )
    }

export default Navbar