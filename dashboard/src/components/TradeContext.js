import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const TradeContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeWindow: () => {},
});

export const TradeContextProvider = (props) => {
  const [modal, setModal] = useState(null);
  // modal = { type: "buy" | "sell", uid: string }

  const openBuyWindow = (uid) => {
    setModal({ type: "buy", uid });
  };

  const openSellWindow = (uid) => {
    setModal({ type: "sell", uid });
  };

  const closeWindow = () => {
    setModal(null);
  };

  return (
    <TradeContext.Provider
      value={{
        openBuyWindow,
        openSellWindow,
        closeWindow,
      }}
    >
      {props.children}

      {modal?.type === "buy" && <BuyActionWindow uid={modal.uid} />}
      {modal?.type === "sell" && <SellActionWindow uid={modal.uid} />}
    </TradeContext.Provider>
  );
};

export default TradeContext;
