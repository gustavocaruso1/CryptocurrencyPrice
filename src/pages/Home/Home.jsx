import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
const Home = () => {

    const {allCoin, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(()=>{
        setDisplayCoin(allCoin);
    },[allCoin])

    return (
        <div className='home'>
            <div className='hero'>
                <h1>Maior<br/> Mercado de Cripto</h1>
                <p>
                    Bem-vindo ao maior mercado de criptomoedas. Cadastre-se para explorar mais sobre criptos.
                </p>
                <form>
                    <input type="text" placeholder='Pesquise a cripto...'/>
                    <button type='submit'>Pesquisar</button>
                </form>
            </div>
            <div className='crypto-table'>
                <div className='table-layout'>
                    <p>#</p>
                    <p>Moeda</p>
                    <p>Preço</p>
                    <p style={{textAlign:"center"}}>Alteração em 24h</p>
                    <p className='market-cap'>Captalização de Mercado</p>
                </div>
                {
                    displayCoin.slice(0,10).map((item, index)=> (
                        <div className="table-layout" key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} alt="" />
                                <p>{item.name + " - " + item.symbol}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                            <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home