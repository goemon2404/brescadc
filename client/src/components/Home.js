import Data from '../data-base/Products.json'
import Banner from '../data-base/Banner.json'
import './components-css/Home.css'
import Product_card from './Product-card';



import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React  from 'react';
//import classNames from 'classnames';
import {  Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';


class Home extends React.Component{
    constructor(props){
        super(props); 
      
        this.state={ 
            ...Data,...Banner,Item:[]
        };
    }

    

    
    render() {
    
      
  return (
     <div>
   <section >
       <div className="Two-Img">
          <div class="Div-Img"  >
            <CardImg 
            className="Left-Img"
            src="https://images.getbento.com/accounts/f7efa3ac70fc351a1aa21cbd6bbe24c6/media/images/91517bresca_lodge_1.jpg"
            />
            <button
              className="Card-btn"
              href="https://www.exploretock.com/bresca?tock_source=tock&tock_medium=search_nav"
              target="_blank" 
              rel=" noreferrer"
              > reservations
            </button>      
          </div>
      
          <div class="Div-Img">
            <CardImg
            className="Right-Img"
            src="https://images.getbento.com/accounts/f7efa3ac70fc351a1aa21cbd6bbe24c6/media/images/29463untitled-6691.jpg?fit=max&w=1800&auto=format,compress'"
            />
            <button
              className="Card-btn"
              href="https://www.exploretock.com/bresca/"
              target="_blank" 
              rel=" noreferrer"
            > beehome
            </button>
          </div>
      </div>
      </section>
      <section>
        <div className="Text-Content">
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

        </div>
    </section> 
    </div>
  );
    
    }
}

export default Home;