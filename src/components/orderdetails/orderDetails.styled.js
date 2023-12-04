import styled from "@emotion/styled";

const OrderDetailsContainer = styled.div`
  width: 90vw;
  margin: 30px auto;
  border: 1px solid #e9e8e8;
  background-color: #fefffe;
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
`;

const Item = styled.div`
  flex: 1;
  padding-left: 30px;
  height: 80px;
`;

const ItemHeader = styled.div`
  margin-bottom: 15px;
  color: #8d8c8c;
  font-size: 12px;
`;

const ItemDetails = styled.div`
font-size: 18px;
    font-weight: bold;
    width: 90%;
`

const Separator = styled.div`
height:90px;
    border:1px solid #f3f3f2;
`


const orderDetailsStyle = {
  OrderDetailsContainer,
  Item,
  ItemHeader,
  ItemDetails,
  Separator
};

export default orderDetailsStyle;
