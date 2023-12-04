import styled from "@emotion/styled";
import status from "../../data/status";
import { warning, danger, success } from "../commonstyles/colors";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from '@mui/icons-material/Search';

const {
  Approved,
  PriceUpdated,
  QuantityUpdated,
  QuantityPriceUpdated,
  PriceNotSame,
  QuantityNotSame,
  Other,
  Missing,
  MissingUrgent,
} = status;

const allStatus = [
  Approved,
  PriceUpdated,
  QuantityUpdated,
  QuantityPriceUpdated,
  PriceNotSame,
  QuantityNotSame,
  Other,
];

const getColor = (status) => {
  let color = "";
  if (allStatus.includes(status)) {
    color = success;
  } else if (status === Missing) {
    color = warning;
  } else if (status === MissingUrgent) {
    color = danger;
  }
  return color;
};

const RightIcon = styled(CheckIcon)`
  color: ${(props) =>
    allStatus.includes(props.status) ? getColor(props.status) : ""};
  font-size:22px;
`;

const CancelIcon = styled(ClearIcon)`
  color: ${(props) =>
    allStatus.includes(props.status) ? "" : getColor(props.status)};
    font-size:22px;
`;

const EditText = styled.span`
cursor: pointer;
font-size:18px; 
`

const ItemQty = styled.span`
color: black; font-weight: bold 
`

const ListContainer = styled.div`
  margin-top: 10px;
`;

const TableContainer = styled.div`
  width: 90vw;
  min-width: 1100px;
  max-width: 1800px;
  margin: 10px auto;
  border: 1px solid #e9e8e8;
  background-color: #fefffe;
  border-radius: 10px;
  padding: 20px 60px;
`;

const Table = styled.table`
  width: 100%;
  tr {
    padding: 10px;
  }

  th {
    color: #9d9c9d;
  }

  td {
    color: #6e6e6e;
  }

  td,
  th {
    border-bottom: 1px solid #ddd;
    text-align: left;
    padding: 20px 10px;
  }

  td:first-of-type {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  td:last-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const InputBtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const InputContainer = styled.form`
width:200px; border:1px solid gray; border-radius:25px; position:relative; height:100%;
height:40px;
padding-left:5px;
`;

const SearchInput = styled.input`
  border: none;
  padding: 10px 30px;
  outline: none;
  background-color: transparent;
`;

const SearchIconContainer = styled.button`
position:absolute; background:none; border:none; left:5; top:0; display:flex; flex-direction:row; justify-content:center; align-items:center; height:100%;
`

const Search = styled(SearchIcon)`
font-size:18px;
`

const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NewItemBtn = styled.div`
  height: 30px;
  border: 1px solid green;
  border-radius: 15px;
  color: #1f633e;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-right: 20px;
  cursor: pointer;
`;

const ItemStatus = styled.span`
  padding: 10px 15px;
  background-color: ${(props) => getColor(props.status)};
  border-radius: 20px;
  font-size: 14px;
  color: white;
`;

const ItemImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;

const IconContainer = styled.span`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

const itemListStyle = {
  ListContainer,
  TableContainer,
  InputBtnContainer,
  InputContainer,
  SearchInput,
  BtnsContainer,
  NewItemBtn,
  ItemImage,
  IconContainer,
  Table,
  ItemStatus,
  RightIcon,
  CancelIcon,
  EditText,
  ItemQty,
  SearchIconContainer,
  Search
};

export default itemListStyle;
