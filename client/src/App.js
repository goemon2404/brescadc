import logo from './logo.svg';
import './App.css';


//import trong ứng dụng
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Menus from './components/Menus';
import ProductDetail from './components/ProductDetail';
import SignUp from './components/SignUp';
import Product_card from './components/Product-card';
import Products from './components/Products';
import Login from './components/Login';
// import bên thứ 3 
import classNames from 'classnames';
import React from "react";
import {
  BrowserRouter as Router,
 
  Route,
  Redirect,
  Switch
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';






function App() { 
  return (
   
    <div className="App">
      <Router>
  
        <TopMenu/>
        <div className="Main">
        <Switch>
        <Route path="/" exact component ={Home}/>
        <Route path="/products" component ={Products}/>
        <Route path="/product-card" component ={Product_card}/>
        <Route path="/productdetail/:id" component ={ProductDetail}/>
        <Route path="/brescamenus/" component ={Menus}/>
        <Route path="/brescamenus/:id" component ={Menus}/>
        <Route path="/login" component ={Login}/>
        <Route path="/sign-up" component ={SignUp}/>
        <Route path='/404' component={ErrorPage} />
        <Redirect from='*' to='/404' />
        </Switch>
        </div>
        <Footer/>

      </Router>
    </div>
    
  
  );
}

export default App;
