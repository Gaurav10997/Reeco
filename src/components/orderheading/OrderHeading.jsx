import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import orderHeadingStyle from "./orderHeading.styled";

const {OrderHeadingContainer, OrderHeadingText, Heading, OrderId, OrderBtnTitleContainer, OrderBtnContainer, BackButton, ApproveOrderBtn} = orderHeadingStyle;

const OrderHeading = () => {
  return (
    <OrderHeadingContainer>
      <OrderHeadingText>
        Order{" "}
        <ArrowForwardIosIcon style={{ fontSize: "12px", margin: "0px 5px" }} />{" "}
        <OrderId>Order 32457ABC</OrderId>
      </OrderHeadingText>
      <OrderBtnTitleContainer>
        <Heading>Order 32457ABC</Heading>
        <OrderBtnContainer>
          <BackButton>Back</BackButton>
          <ApproveOrderBtn>Approve Order</ApproveOrderBtn>
        </OrderBtnContainer>
      </OrderBtnTitleContainer>
    </OrderHeadingContainer>
  );
};

export default OrderHeading;
