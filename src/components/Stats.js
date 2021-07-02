import React, { useState, useEffect } from "react";
import "./Stats.css";
import useGlobal from "../context/GlobalContext";

function Stats() {
  const { getSymbolValue, getStatsList } = useGlobal();

  let [statsList, setStatsList] = useState([]);

  useEffect(() => {
    const setStats = async () => {
      let data = await getStatsList();
      setStatsList(data);
    };
    setStats();
  }, []);

  const updateGraph = (target) => {
    getSymbolValue(target);
  };

  return (
    <div className="stats">
      <div className="stats__container">
        {statsList &&
          statsList.map((item, idx) => (
            <div
              className="stat"
              key={idx}
              onClick={() => {
                updateGraph(item);
              }}
            >
              {item.displaySymbol}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Stats;

// const statsList = [
//   {
//     description: "Binance ETHBTC",
//     displaySymbol: "ETH/BTC",
//     symbol: "ETHBTC",
//   },
//   {
//     description: "Binance LTCBTC",
//     displaySymbol: "LTC/BTC",
//     symbol: "BINANCE:LTCBTC",
//   },
//   {
//     description: "Binance BNBBTC",
//     displaySymbol: "BNB/BTC",
//     symbol: "BINANCE:BNBBTC",
//   }, cvbnm
// ];
