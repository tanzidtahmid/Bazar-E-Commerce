import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProducts from './Components/AddProducts/AddProducts';
import FashionForMen from './Components/FashionForMen/FashionForMen';
import SingleManPd from './Components/SingleManPd/SingleManPd';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react/cjs/react.development';
import OrderProceed from './Components/OrderProceed/OrderProceed';
import HomeAppliance from './Components/HomeAppliance/HomeAppliance';
import ConfrimOrder from './Components/ConfrimOrder/ConfrimOrder';
import Payment from './Components/Payment/Payment';
import OrderList from './Components/OrderList/OrderList';
import SingleOrder from './Components/SingleOrder/SingleOrder';
import SignUp from './Components/Login/SignUp';
import MyOrder from './Components/MyOrder/MyOrder'
import Building from './Components/Building/Building';
import AllProducts from './Components/AllProducts/AllProducts';

export const userContext = createContext()

const App = () => {
  const [signedInUser, setSignedInUser] = useState(userContext);

  return (
    <userContext.Provider value= { [signedInUser, setSignedInUser] }>
    <Router>
      <div>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route exact path = '/SignUp'>
            <SignUp></SignUp>
          </Route>
          <Route exact path = '/building'>
            <Building></Building>
          </Route>
          <Route path = '/addProducts'>
           <AddProducts></AddProducts>
          </Route>
          <Route path = '/fashionForMen'>
            <FashionForMen></FashionForMen>
          </Route>
          <Route path = '/logIn'>
            <Login></Login>
          </Route>
          <PrivateRoute path = '/singleManPd/:id'>
            <SingleManPd></SingleManPd>
          </PrivateRoute>
          <PrivateRoute path = '/orderProceed'>
            <OrderProceed></OrderProceed>
          </PrivateRoute>
          <PrivateRoute path = '/homeAppliance'>
            <HomeAppliance></HomeAppliance>
          </PrivateRoute>
          <PrivateRoute path = '/ConfrimOrder'>
            <ConfrimOrder></ConfrimOrder>
          </PrivateRoute>
          <PrivateRoute path = '/Payment'>
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path = '/OrderList'>
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path = '/singleOrder/:id'>
            <SingleOrder></SingleOrder>
            </PrivateRoute>
          <PrivateRoute path = '/dashboard'>
            <MyOrder> </MyOrder>
          </PrivateRoute>
          <PrivateRoute path = '/allProducts'>
            <AllProducts></AllProducts>
          </PrivateRoute>


        </Switch>
      </div>
    </Router>
    </userContext.Provider>
    // </userContext.Provider>
  );
};

export default App;