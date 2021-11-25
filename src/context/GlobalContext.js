import React, { useContext, useState } from "react";
import axios from "axios";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const TOKEN = "c3e87ciad3ief4eld7i0";
  const [graphValues, setGraphValues] = useState([]);
  const [graphTitle, setGraphTitle] = useState("Choose a option");
  const [statError, setStatError] = useState("");

  const getStatsList = async () => {
    let response = await axios.get(
      `https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=${TOKEN}`
    );
    console.log(response.data);
    return response.data.slice(0, 8);
  };

  const getSymbolValue = async (tar) => {
    let syb = tar.symbol;
    setGraphTitle(tar.description);
    const toUnixTime = Math.floor(Date.now() / 1000);
    console.log("to", toUnixTime);
    let beforeDate = new Date();
    beforeDate.setDate(beforeDate.getDate() - 30);
    const fromUnixTime = Math.floor(beforeDate / 1000);
    console.log("from", fromUnixTime);
    let response = await axios.get(
      `https://finnhub.io/api/v1/crypto/candle?symbol=${syb}&resolution=D&from=${fromUnixTime}&to=${toUnixTime}&token=${TOKEN}`
    );
    console.log(response);
    objProcess(response.data);
  };

  const objProcess = (obj) => {
    if (obj.s === "no_data") {
      setStatError("NO DATA FOUND!");
      setGraphValues([]);
    } else {
      setStatError("");
      let upd = [];
      let beforeDate = new Date();
      beforeDate.setDate(beforeDate.getDate() - 30);
      let i = new Date(beforeDate);
      let j = 0;
      while (i <= Date.now()) {
        upd.push({
          x: new Date(i),
          y: [obj.o[j], obj.h[j], obj.l[j], obj.c[j]],
        });
        j++;
        i.setDate(i.getDate() + 1);
      }
      setGraphValues(upd);
      console.log(upd);
    }
  };

  const value = {
    statError,
    graphValues, // Graph <- News <- App
    graphTitle,
    setGraphValues, // Stats <- App
    getStatsList,
    getSymbolValue,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(GlobalContext);
};

export default useGlobal;

// const noData =
//   "https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:ARDRB…n=D&from=1622589913&to=1625181913&token=c3e87ciad3ief4eld7i0";
