import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CartItems from "./Routes/CartItems/CartItems";
import Homepage from './Routes/Homepage/Homepage';
import ProductDetails from "./Routes/ProductDetails/ProductDetails";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path='/cart'>
          <CartItems />
        </Route>
        <Route path='/:productName'>
          <ProductDetails />
        </Route>
        <Route path='/'>
          <Homepage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
