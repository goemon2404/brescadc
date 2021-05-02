import Data from '../data-base/Products.json';
import './components-css/Products.css';
import Product_card from './Product-card';

import React  from 'react';
import { Col, Container, Row } from 'reactstrap';
//import { Link } from 'react-router-dom';


class Products extends React.Component{
    constructor(props){
        super(props); 
      
        this.state={ 
            Data
        };
    }

    
    render() {
        const {products}=this.state.Data;

        console.log(products)
       

  return (
   <Container>
       
       <h2> Danh sách sản phẩm  </h2>
       <Row>
        {products.map(item =>  (  
            <Col sm="3" className="Col-ListProducts-card" >
                
                    <Product_card item={item}/>

            </Col>
        ))}
      
        </Row>
       
    
    </Container> 
  );
    
    }
}

export default Products;