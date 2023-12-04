import React from "react";
import ItemList from "./ItemList";
import PrintIcon from "@mui/icons-material/Print";
import itemListStyle from "./itemList.styled";

const {
  TableContainer,
  InputBtnContainer,
  InputContainer,
  SearchInput,
  BtnsContainer,
  NewItemBtn,
  SearchIconContainer,
  Search
} = itemListStyle;

const ItemListContainer = () => {
  return (
    <TableContainer>
      <InputBtnContainer>
        <InputContainer>
            <SearchInput placeholder="Search.." />
            <SearchIconContainer><Search fontSize="small"/></SearchIconContainer>
        </InputContainer>
        <BtnsContainer>
          <NewItemBtn>Add Item</NewItemBtn>
          <PrintIcon />
        </BtnsContainer>
      </InputBtnContainer>
      <ItemList />
    </TableContainer>
  );
};

export default ItemListContainer;
