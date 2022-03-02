import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/authentication/login/Login";
import Regester from "./Components/authentication/Regester/Regester";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import NOtfount from "./Components/notfound/NOtfount";
import OrderReview from "./Components/order/OrderReview";
import PlaceOrder from "./Components/order/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Shiping from "./Components/Shiping/Shiping";
import Shop from "./Components/shop/Shop";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/order">
              <OrderReview />
            </Route>
            <Route path="/inventory">
              <Inventory />
            </Route>
            <Route path="/shipment">
              <Shiping />
            </Route>
            <PrivateRoute path="/PlaceOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path={"/login"}>
              <Login></Login>
            </Route>

            <Route path={"/regester"}>
              <Regester></Regester>
            </Route>

            <Route exact path="*">
              <NOtfount />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
