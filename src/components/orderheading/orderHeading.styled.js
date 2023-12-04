import styled from "@emotion/styled";

const OrderHeadingContainer = styled.div`
width: 99.2vw;
  padding: 20px 60px;
  background-color: #fefffe;
  border: 1px solid #e4e5e5;
  box-shadow: 0 4px 2px -2px #e4e5e5;
  min-width: 1100px;
  max-width: 2000px;
`

const Heading = styled.h1`
padding: 0;
  margin: 0;
`

const OrderHeadingText = styled.div`
height: 35px;
  display: flex;
  align-items: center;
  color:#8d8c8c;
`

const OrderBtnTitleContainer = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`
const OrderId = styled.span`
text-decoration: underline;
`
const OrderBtnContainer = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  min-width: 240px;
  max-width: 280px;
`

const BackButton = styled.span`
padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid green;
  background-color: white;
  color: #1f633e;
  cursor: pointer;
`

const ApproveOrderBtn = styled.span`
padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #1f633e;
  background-color: #1f633e;
  color: white;
  cursor: pointer;
`

const orderHeadingStyle = {
    OrderHeadingContainer, OrderHeadingText, OrderBtnTitleContainer, OrderId, OrderBtnContainer, BackButton, ApproveOrderBtn, Heading
}

export default orderHeadingStyle;