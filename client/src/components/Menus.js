
import Brand from '../data-base/Brand.json';
import './components-css/Menus.css';
import Product_card from './Product-card';

import Carousel from "react-multi-carousel";
import React  from 'react';
import { Col, Container, Row,Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


class Menus extends React.Component{
    constructor(props){
        super(props); 
      
        this.state={ 
        };
    }

    
    render() {
        
       

  return (
    <div>
        <section id="menus">
        <ul className="tabs-nav">
          <li>
            <div id="tab-dine-in-lodge" className="btn btn-tab">
              <Link to="/brescamenus/#dine-in-lodge" > dine in - lodge </Link>
            </div>
          </li>
          <li>
            <div id="tab-dinein" className="btn btn-tab">
            <Link to="/brescamenus/#dinein" > dine in </Link>
            </div>
          </li>
          <li>
            <div id="tab-beehome" className="btn btn-tab">
            <Link to="/brescamenus/#beehome" > beehome </Link>
            </div>
          </li>
          <li>
            <div id="tab-krugxonion" className="btn btn-tab">
            <Link to="/brescamenus/#krugxonion" > krug x onion </Link>
            </div>
          </li>
          <li>
            <div id="tab-cocktails-list" className="btn btn-tab">
            <Link to="/brescamenus/#cocktails-list" > cocktails list </Link>
            </div>
          </li>

        </ul>
          <div className="Tabs-Content">
          <p>
            <a 
              href="https://www.exploretock.com/bresca?tock_source=tock&amp;tock_medium=search_nav" 
              rel="noopener noreferrer" 
              target="_blank"> 
                    Reservations
              </a>
            </p>
            <p>Wednesday | Thursday | Sunday : 5.00 - 9.30PM</p>
            <p>Friday &amp; Saturday : 5.00 - 10.00 pm</p>
            <p>Sunday Lunch : 11.30 - 1.30 PM</p>
            <p>Closed Monday &amp; Tuesday</p>
            <p>----------------</p>
  
            <p>
            <a 
              href="https://www.exploretock.com/bresca/" 
              rel="noopener noreferrer" 
              target="_blank"> 
                    "Bee Home" Carry Out
              </a>
            </p>
            <p>Weekly Prix Fixe menus at the comfort of your home.</p>
            <p>Now you can get it delivered with <a id="Skiptheline"
                                                  href="https://www.skipthelineus.com/delivery.html" 
                                                  rel="noopener noreferrer" 
                                                  target="_blank">
                                                    'Skiptheline'
                                                  </a>
            </p>
            <p>Wednesday - Sunday : 5.00 - 9.00 PM</p>
            <br/>
            <p>
            <a 
              href="https://www.exploretock.com/bresca/" 
              rel="noopener noreferrer" 
              target="_blank"> 
                    "Bee Home" Carry Out
              </a>
            </p>
            <p>Weekly Prix Fixe menus at the comfort of your home.</p>
            <p>Now you can get it delivered with <a id="Skiptheline"
                                                  href="https://www.skipthelineus.com/delivery.html" 
                                                  rel="noopener noreferrer" 
                                                  target="_blank">
                                                    'Skiptheline'
                                                  </a>
            </p>
            <p>Wednesday - Sunday : 5.00 - 9.00 PM</p>
            <br/>
  
          </div>
        </section> 
     </div>
  );
    
    }
}

export default Menus;