import React from "react";

function Stats() {
  const statsList = [
    {
      description: "Binance ETHBTC",
      displaySymbol: "ETH/BTC",
      symbol: "ETHBTC",
    },
    {
      description: "Binance LTCBTC",
      displaySymbol: "LTC/BTC",
      symbol: "BINANCE:LTCBTC",
    },
    {
      description: "Binance BNBBTC",
      displaySymbol: "BNB/BTC",
      symbol: "BINANCE:BNBBTC",
    },
  ];
  return (
    <div className="stats__wrapper">
        {statsList.map((e,idx) => {
            <div 
        } )}
        
    </div>
    )   
}

export default Stats;
