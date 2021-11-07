import React from "react";
import walmart from "../assets/logos/Walmart.svg";
import morgan from "../assets/logos/JP Morgan.svg";
import visa from "../assets/logos/Visa.svg";
import tinder from "../assets/logos/Tinder.svg";
import samsung from "../assets/logos/Samsung.svg";
import verizon from "../assets/logos/Verizon.svg";

function Logos() {
  return (
    <div className="container">
      <div className="row text-center p-4 mt-5 mb-5">
        <div className="col p-2">
          <img src={walmart} alt="" />
        </div>
        <div className="col p-2">
          <img src={morgan} alt="" />
        </div>
        <div className="col p-2">
          <img src={visa} alt="" />
        </div>
        <div className="col p-2">
          <img src={tinder} alt="" />
        </div>
        <div className="col p-2">
          <img src={samsung} alt="" />
        </div>
        <div className="col p-2">
          <img src={verizon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Logos;
