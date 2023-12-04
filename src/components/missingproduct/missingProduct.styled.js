import styled from "@emotion/styled";

const MissingProductContainer = styled.div`
  border: 1px solid gray;
  width: 500px;
  background-color: white;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 20px;
  position: relative;
`;
const Button = styled.div`
  margin-right: 30px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  cursor:pointer;
`;

const CloseIcon = styled.span`
  position: absolute;
  right: 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  height: 30px;
  width: 30px;
`;

const RightBtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const missingProductStyle = {
  MissingProductContainer,
  Button,
  CloseIcon,
  RightBtnContainer
};

export default missingProductStyle;
