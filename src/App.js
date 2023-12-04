import './App.css';
import Header from './components/header/Header';
import ItemListContainer from './components/list/ItemListContainer';
import OrderDetails from './components/orderdetails/OrderDetails';
import OrderHeading from './components/orderheading/OrderHeading';

function App() {
  return (
    <div>
      <Header/>
      <OrderHeading/>
      <OrderDetails/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
