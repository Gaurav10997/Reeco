import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handlePrice,
  handleStatus,
  setQuantity,
} from "../../orders-redux/orderSlice.js";

import status from "../../data/status.js";
import { warning } from "../commonstyles/colors.js";
import editContainerStyle from "./editContainer.styled.js";


const  {
  MainContainer,
  ItemNameAndBrandContainer,
  ItemNameContainer,
  BrandNameContainer,
  ItemImagePriceQtyContainer,
  ItemImageContainer,
  ItemImage,
  ItemPriceQtyContainer,
  ItemTotalText,
  ItemTotalValue,
  QtyBtn,
  Input,
  InputSupportTextContainer,
  PriceInputContainer,
  QtyInputBtnContainer,
  SupportText,
  SelectReasonOptionalTextContanier,
  ItemRow,
  AllReasonsContainer,
  TextHeading,
  RightBtnContainer,
  CancelBtn,
  SendBtn,
  CloseIcon
} = editContainerStyle;

const {
  PriceUpdated,
  QuantityUpdated,
  QuantityPriceUpdated,
  PriceNotSame,
  QuantityNotSame,
  Other,
  MissingProduct,
} = status;

const Edit = (props) => {
  const { id, handleModal } = props;

  const { orders } = useSelector((state) => state.orderApp);
  const item = orders.find((item) => item.id === id);  
  
  const dispatch = useDispatch();

  const [bgColor, setBgColor] = useState("");
  const [price, setPrice] = useState(item.price);
  const [qty, setQty] = useState(item.quantity);

  const [selectedReason, setSelectedReason] = useState("");

  const reasons = [MissingProduct, QuantityNotSame, PriceNotSame, Other];


  const handleIncreaseQty = (item) => {
    setQty(qty + 1);
  };

  const handleDecreaseQty = (item) => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const handlePriceChange = (e) => {
    setPrice(Number(e.target.value));
  };

  const handleQtyChange = (e) => {
    setQty(Number(e.target.value));
  };


  const handleReason = (reason) => {
    setSelectedReason(reason);
    setBgColor(warning);
  };

  // in this function, add changes to redux store.
  const handleSend = () => {

    if(!price || !qty){
      alert("Please enter any number in price or quantity ");
      return;
    }

    let obj = { id: item.id, qty: Number(qty) };

    if (item.quantity !== Number(qty)) {
      dispatch(setQuantity(obj));
    }

    if (item.price !== Number(price)) {
      obj = { id: item.id, price: Number(price) };
      dispatch(handlePrice(obj));
    }

    handleModal(false)

    let statusObj = { id: item.id, status: QuantityPriceUpdated };
    if (item.price !== price && item.quantity !== qty) {
      statusObj.status = QuantityPriceUpdated;
      dispatch(handleStatus(statusObj));
      return;
    }

    if (item.price !== price) {
      statusObj.status = PriceUpdated;
      dispatch(handleStatus(statusObj));
      return;
    }

    if (item.quantity !== qty) {
      statusObj.status = QuantityUpdated;
      dispatch(handleStatus(statusObj));
      return;
    }

    if (selectedReason) {
      statusObj.status = selectedReason;
      dispatch(handleStatus(statusObj));
      return;
    }
  };

  return (
    <MainContainer>
      <CloseIcon
        onClick={() => handleModal(false)}
      >
        X
      </CloseIcon>
      <ItemNameAndBrandContainer>
        <ItemNameContainer>{item.name}</ItemNameContainer>
        <BrandNameContainer>{item.brand}</BrandNameContainer>
      </ItemNameAndBrandContainer>
      <ItemImagePriceQtyContainer>
        <ItemImageContainer>
          <ItemImage src={item.img} alt="avocodo" />
        </ItemImageContainer>
        <ItemPriceQtyContainer>
          <ItemRow>
            <TextHeading>Price</TextHeading>
            <InputSupportTextContainer>
              <PriceInputContainer>
                <Input
                  value={price}
                  name="price"
                  type="number"
                  onChange={(e) => handlePriceChange(e)}
                />
              </PriceInputContainer>
              <SupportText> /6*1LB</SupportText>
            </InputSupportTextContainer>
          </ItemRow>
          <ItemRow>
            <TextHeading>Quantity</TextHeading>
            <InputSupportTextContainer>
              <QtyInputBtnContainer>
                <QtyBtn onClick={() => handleDecreaseQty(item)}>-</QtyBtn>
                <Input
                  value={qty}
                  type="number"
                  name="quantity"
                  onChange={(e) => handleQtyChange(e)}
                />
                <QtyBtn onClick={() => handleIncreaseQty(item)}>+</QtyBtn>
              </QtyInputBtnContainer>
              <SupportText>*6*1LB</SupportText>
            </InputSupportTextContainer>
          </ItemRow>
          <ItemRow>
            <ItemTotalText>Total</ItemTotalText>
            <ItemTotalValue>
              <span>${(price * qty).toFixed(2)}</span>
            </ItemTotalValue>
          </ItemRow>
        </ItemPriceQtyContainer>
      </ItemImagePriceQtyContainer>
      <div>
        <SelectReasonOptionalTextContanier>
          <span style={{ fontWeight: "bold" }}>Choose Reason</span>{" "}
          <span>(optional)</span>
        </SelectReasonOptionalTextContanier>
        <AllReasonsContainer>
          {reasons.map((item) => (
            <span
              key={item}
              onClick={() => handleReason(item)}
              style={{
                backgroundColor: selectedReason === item ? bgColor : "",
                border: "1px solid gray",
                padding: "8px 8px",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "12px",
                color: selectedReason === item ? "white" : "",
              }}
            >
              {item}
            </span>
          ))}
        </AllReasonsContainer>
      </div>
      <RightBtnContainer>
        <CancelBtn onClick={() => handleModal(false)}
        >
          Cancel
        </CancelBtn>
        <SendBtn
          onClick={() => handleSend()}
        >
          Send
        </SendBtn>
      </RightBtnContainer>
    </MainContainer>
  );
};

export default Edit;
