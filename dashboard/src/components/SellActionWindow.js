import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TradeContext from "./TradeContext";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [sellQuantity, setSellQuantity] = useState(1);
  const [sellPrice, setSellPrice] = useState(0.0);

  const { closeWindow } = useContext(TradeContext);

  const handleSellClick = () => {
    axios.post("http://localhost:3002/sellOrder", {
      name: uid,
      qty: sellQuantity,
      price: sellPrice,
      mode: "SELL",
    });

    closeWindow();
  };

  const handleCancelClick = () => {
    closeWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setSellQuantity(e.target.value)}
              value={sellQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setSellPrice(e.target.value)}
              value={sellPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Sell at Price Above ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
