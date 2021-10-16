import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Inventory from './Components/Inventory/Inventory'
import OrderReview from './Components/OrderReview/OrderReview'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route  path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
