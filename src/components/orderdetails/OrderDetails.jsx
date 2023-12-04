import React from "react";
import { useSelector } from "react-redux";
import category from "./../images/category.png";

import orderDetailsStyle from "./orderDetails.styled";

const {OrderDetailsContainer, Item, ItemHeader, ItemDetails, Separator} = orderDetailsStyle;

const OrderDetails = () => {

  const {orders} = useSelector((state)=> state.orderApp);

  const orderTotal = orders.reduce((a, c) => a + c.quantity * c.price, 0);

  return (
    <OrderDetailsContainer>
      <Item>
        <ItemHeader>Supplier</ItemHeader>
        <ItemDetails>East coast fruits & vegetables</ItemDetails>
      </Item>
      <Separator></Separator>
      <Item>
        <ItemHeader>Shipping Date</ItemHeader>
        <ItemDetails>Thu, Feb 10</ItemDetails>
      </Item>
      <Separator></Separator>
      <Item>
        <ItemHeader>Total</ItemHeader>
        <ItemDetails>$ {orderTotal.toFixed(2)}</ItemDetails>
      </Item>
      <Separator></Separator>
      <Item>
        <ItemHeader>Category</ItemHeader>
        <div><img src={category} style={{height:"50px", width:"200px"}} alt={"category"}/></div>
      </Item>
      <Separator></Separator>
      <Item>
        <ItemHeader>Department</ItemHeader>
        <ItemDetails>300-444-678</ItemDetails>
      </Item>
      <Separator></Separator>
      <Item>
        <ItemHeader>Status</ItemHeader>
        <ItemDetails>Awaiting your approval</ItemDetails>
      </Item>
    </OrderDetailsContainer>
  );
};

export default OrderDetails;
