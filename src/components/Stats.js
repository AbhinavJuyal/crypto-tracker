import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Stats.css";

function Stats({ TOKEN }) {
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

  let [statsList, setStatsList] = useState();

  useEffect(() => {
    let promiseStats = getStatsList();
    console.log(promiseStats);
    setStatsList(promiseStats);
  }, []);

  const getStatsList = async () => {
    // try {
      let response = await axios.get(
        `https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=${TOKEN}`
      );
      return response.data.splice(0,10);
      // console.log(response.data.splice(0,10));
    // }
    // catch (err) {
      // console.log(err);
    // }

    // .then((resolve) => {
    //   let data = resolve.data;
    //   data.length = 10;
    //   console.log(data);
    //   return data;
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  };

  return (
    <div className="stats">
      <div className="stats__container">
        <button
          onClick={() => {
            console.log(statsList);
          }}
        >
          Check
        </button>
        {!statsList
          ? null
          : statsList.map((e, idx) => (
              <div className="stat" key={idx}>
                {e.displaySymbol}
              </div>
            ))}
      </div>
    </div>
  );
}

export default Stats;
