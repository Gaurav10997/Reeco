import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import headerStyle from "./header.styled.js";

const {
  HeaderContainer,
  AppNameAndNavBtnContainer,
  NavBtnContainer,
  AppName,
  CartAndUserNameContainer,
  UserName,
  NavBtn,
  CartIconContainer
} = headerStyle;

const Header = () => {
  return (
    <HeaderContainer>
      <AppNameAndNavBtnContainer>
        <AppName>Reeco</AppName>
        <NavBtnContainer>
          <NavBtn>Store</NavBtn>
          <NavBtn>Orders</NavBtn>
          <NavBtn>Analytics</NavBtn>
        </NavBtnContainer>
      </AppNameAndNavBtnContainer>
      <CartAndUserNameContainer>
        <CartIconContainer>
          <ShoppingCartIcon fontSize="small" />
        </CartIconContainer>
        <UserName>
          Hello, User{" "}
          <span>
            <KeyboardArrowDownIcon fontSize="small" />
          </span>
        </UserName>
      </CartAndUserNameContainer>
    </HeaderContainer>
  );
};

export default Header;
