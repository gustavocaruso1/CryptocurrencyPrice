import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
        <div className='hero'>
            <h1>Maior <br/>Mercado de Cripto</h1>
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
        </div>
    </div>
  )
}

export default Home