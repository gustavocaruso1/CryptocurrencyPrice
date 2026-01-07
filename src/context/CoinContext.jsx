import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props)=>{

    const[allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const fetchAllCoin = async () => {
    try {
        const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=10&page=1&price_change_percentage=24h`,
        {
            headers: {
            'x-cg-demo-api-key': 'CG-nkbnLSMjCFmMJACeQmXup19B'
            }
        }
        );

        const data = await res.json();
        setAllCoin(data);
    } catch (error) {
        console.error(error);
    }
    };


    useEffect(()=>{
        fetchAllCoin();
    }, [currency.name]);


    const contextValue = {
        allCoin, currency, setCurrency
    }

    return(
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;