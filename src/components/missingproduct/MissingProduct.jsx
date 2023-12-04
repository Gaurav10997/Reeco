import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleStatus } from "../../orders-redux/orderSlice.js";
import status from "../../data/status.js";
import missingProductStyle from "./missingProduct.styled.js";

const { MissingProductContainer, Button, CloseIcon, RightBtnContainer } =
  missingProductStyle;

const { Missing, MissingUrgent } = status;

const MissingProduct = (props) => {
  const { id, handleModal } = props;

  const { orders } = useSelector((state) => state.orderApp);

  const { name } = orders.find((item) => item.id === id);

  const dispatch = useDispatch();

  const handleMissingProduct = (isMissingUrgent) => {
    let obj = { id: id, status: "" };
    if (isMissingUrgent) {
      obj.status = MissingUrgent;
      dispatch(handleStatus(obj));
      handleModal(false);
    } else {
      obj.status = Missing;
      dispatch(handleStatus(obj));
      handleModal(false);
    }
  };

  return (
    <MissingProductContainer>
      <CloseIcon onClick={() => handleModal(false)}>X</CloseIcon>
      <div>
        <h3>Missing Product</h3>
      </div>
      <div>Is `{name}` urgent?</div>
      <RightBtnContainer>
        <Button onClick={() => handleMissingProduct(false)}>No</Button>
        <Button onClick={() => handleMissingProduct(true)}>Yes</Button>
      </RightBtnContainer>
    </MissingProductContainer>
  );
};

export default MissingProduct;
