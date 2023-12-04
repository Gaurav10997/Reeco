import styled from "@emotion/styled";

const MainContainer = styled.div`
  border: 1px solid gray;
  border-radius: 20px;
  width: 600px;
  padding: 10px 10px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ItemNameAndBrandContainer = styled.div`
  padding: 20px;
`;

const ItemNameContainer = styled.div`
  font-size: 20px;
`;

const BrandNameContainer = styled.div`
  color: gray;
  margin-top: 10px;
  font-size: 18px;
`;

const ItemImagePriceQtyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemImageContainer = styled.div`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

const ItemImage = styled.img`
  height: 140px;
  width: 140px;
`;

const ItemPriceQtyContainer = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 15px;
`;

const Input = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };
  width: 80px;
  border: 1px solid gray;
  height: 30px;
  border-radius: 10px;
  text-align: center;
`;

const ItemTotalText = styled.div`
  flex: 0.4;
  font-size: 14px;
  color: black;
`;

const ItemTotalValue = styled.div`
  flex: 0.6;
  display: flex;
  font-size: 18px;
  color: gray;
  padding-left: 20px;
`;

const QtyBtn = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: white;
  background-color: green;
  cursor: pointer;
`;

const InputSupportTextContainer = styled.div`
  flex: 0.6;
  display: flex;
  font-size: 12px;
  color: gray;
`;

const PriceInputContainer = styled.div`
  width: 140px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
`;

const SupportText = styled.span`
height: 30px;
display: flex;
justify-content: center;
align-items: center;
margin-left: -30px;
font-size: 14px;
`;

const TextHeading = styled.div`
  flex: 0.4;
  font-size: 14px;
  color: black;
`;

const QtyInputBtnContainer = styled.div`
  width: 160px;
  height: 30px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  left: -30px;
  justify-content: space-between;
`;

const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

const AllReasonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  padding-left: 10px;
  font-size: 12px;
  color: gray;
  padding-top: 10px;
`;

const SelectReasonOptionalTextContanier = styled.div`
  height: 20px;
  margin: 20px 10px 10px 10px;
`;

const RightBtnContainer = styled.div`
  justify-content: flex-end;
  display: flex;
  height: 60px;
  align-items: center;
  font-size: 14px;
  padding-right: 10px;
`;

const CancelBtn = styled.div`
  color: green;
  cursor: pointer;
`;

const SendBtn = styled.div`
  padding: 10px 30px;
  background-color: green;
  color: white;
  border-radius: 20px;
  margin-left: 20px;
  cursor: pointer;
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  height: 30px;
  width: 30px;
`;

const editContainerStyle = {
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
  TextHeading,
  InputSupportTextContainer,
  Input,
  PriceInputContainer,
  SupportText,
  QtyInputBtnContainer,
  ItemRow,
  AllReasonsContainer,
  SelectReasonOptionalTextContanier,
  RightBtnContainer,
  CancelBtn,
  SendBtn,
  CloseIcon,
};

export default editContainerStyle;
