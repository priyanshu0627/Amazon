import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header.js";
import Home from "./Home.js";
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"; 
import { Elements } from "@stripe/react-stripe-js"; 
import Orders from './Orders';
import Navbar from './Navbar';
import Footer from './Footer';

const promise = loadStripe("pk_test_51JIG8YSBYpU1m2j1E6eCkgBJkjwgd0H94xhJMqKTsxfN2HtYTCWlrqm91U3bsKjpQeDsh2BaLeH4ONGcu6M9Quj60002hz8PON");

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect( () => {
    auth.onAuthStateChanged(authUser => {
      console.log('this is >>>> the user >>>> ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Navbar />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Navbar />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Navbar />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
