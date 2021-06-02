import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { browserHistory } from "react-router";
import CartContainer from "./components/CartContainer";
import AddToCart from "./components/AddToCart";
function App() {
    return (
        <Router
        // history={browserHistory}
        >
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/cart" component={CartContainer} />
                <Route path="/addcart/:title/:price/:amount" component={AddToCart} />
            </Switch>
        </Router>
    );
}

export default App;
