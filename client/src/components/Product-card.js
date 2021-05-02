
import './components-css/Product-card.css'

import React  from 'react';
//import classNames from 'classnames';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Product_card extends React.Component{
    constructor(props){
        super(props); 
      
        this.state={ 
            
        };
    }

    
    render() {
        
        let item=this.props.item;
       
    
    return(
        <div className="div-ListProducts-card" >
            <Card className="Products-card" >
                <CardImg top width="100%"  src={__dirname+'img/'+item.img[0]} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">{item.ProductName}</CardTitle>
                <CardSubtitle tag="h6"  className="mb-2 text-success">Giá: {item.Price} VND</CardSubtitle>
            
                <Button color="primary"><Link className="link-productdetail" to={{pathname:"/productdetail/"+item.ID, state:{item}}} >Thêm vào giỏ hàng </Link> </Button>
                </CardBody>
            </Card>
        </div>
    );
    }

    
}
export default Product_card;