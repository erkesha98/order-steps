import React from "react";
import OrderSteps from "./OrderSteps";
import Button from "@mui/material/Button";
import "./orderStep.style.scss";
import styled from "@emotion/styled";

export default {
  title: "Atom/OrderSteps",
  component: OrderSteps,
};

export const First = {
  args: {
    img: "https://cdn-icons-png.flaticon.com/512/766/766294.png",
    text: "We take your order",
    // header: "How it works?",
    detail: "Choose your cake or customize your cake",
    number: "1",
    numberStyle: { fontSize: "30px", color: "gray", fontWeight: "bold" },
    imgWidth: "150px",
    imgHeight:"150px",
  },
};
export const Second = {
  args: {
    img: "https://as2.ftcdn.net/v2/jpg/04/19/09/45/1000_F_419094559_v0igzFLh7iqp0F3SCQcBdVXgc6KMqxDc.jpg",
    text: "We Bake Your Cake",
    // header: "How it works?",
    detail: "We bake your cake fresh",
    number: 2,
    numberStyle: { fontSize: "30px", color: "gray", fontWeight: "bold" },
    imgWidth: "200px",
  },
};

export const Third = {
  args: {
    img: "https://st2.depositphotos.com/8322640/44432/v/1600/depositphotos_444325028-stock-illustration-bakery-girl-going-cake-delivery.jpg",
    text: "Delivery or Pick up",
    //   header: "How it works?",
    detail: "We deliver your cakes",
    number: 3,
    numberStyle: { fontSize: "30px", color: "gray", fontWeight: "bold" },
    imgWidth: "200px",
  },
};

const handleCustomCakeClick = () => {
  // Define your custom logic here for when the button is clicked
  console.log("Get custom Cake button clicked!");
};
export const StepsContainer = () => (
  <div className="step__container">
    <h1 className="step__container__title">How it works?</h1>
    <div className="step__container__wrapper">
      <OrderSteps {...First.args} />
      <img
        className="step__container__wrapper__img"
        src="https://cdn-icons-png.flaticon.com/128/7893/7893890.png"
        width={"80px"}
        height={"80px"}
        style={{ transform: "rotate(50deg)", marginTop: "-20px" }}
      />
      <OrderSteps {...Second.args} />
      <img
        className="step__container__wrapper__img"
        src="https://cdn-icons-png.flaticon.com/128/7893/7893890.png"
        width={"80px"}
        height={"80px"}
        style={{
          transform: "rotate(130deg) scaleX(-1)",
          marginBottom: "-20px",
        }}
      />
      <OrderSteps {...Third.args} />
    </div>
    <div>
      <Button
        variant="contained"
        className="step__container
      __button"
        onClick={handleCustomCakeClick}
      >
        Custom Cake
      </Button>
    </div>
  </div>
);
