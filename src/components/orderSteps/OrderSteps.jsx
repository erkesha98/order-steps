import React from "react";
import "./orderStep.style.scss";
const OrderSteps = ({ img, text, header, steps, number, detail,numberStyle,imgWidth, imgHeight}) => {
  return (
    <div>
      <h1>{header}</h1>
      <div className="box">
        <div className="container">
          <div>
            <img src={img} alt="order" width={imgWidth} height={imgHeight} />
          </div>
          <div className="details">
            <div className="number" style={numberStyle}>{number}</div>
            <div className="text">
              <h1>{text}</h1>
              <p>{detail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSteps;
