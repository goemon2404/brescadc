
import './components-css/ProductDetail.css'


import "react-multi-carousel/lib/styles.css";
import React  from 'react';

import { Col, Container, Row, CardImg } from 'reactstrap';
// import { Link,withRouter } from 'react-router-dom';


class ProductsDetail extends React.Component{
    constructor(props){
        super(props); 

        
        this.state={ 
            index:0
            
        };
    }
    myRef=React.createRef();
    

    onClickImg(newindex){
       this.setState({index:newindex})
       const list_img = this.myRef.current.children;
       console.log(list_img)
       for(let i=0; i<list_img.length;i++){
          list_img[i].children[0].className=list_img[i].children[0].className.replace("active","");
       }
       list_img[newindex].children[0].className +=" active";
    }
       
    

    
    render() {
        let {item}=this.props.location.state;
        let imglist=item.img;
        let {index}=this.state
      
       

        
      
  return (
   <Container className="Container-ProductDetail">
       
       <h2> Thông tin chi tiết </h2>
        <Col className="col-all">
            <Row >
                <Col  className="-img" >
                    <h2>hình ảnh  </h2>
                
                             <Row>
                           
                                <Col>
                                    <div className="div-big-img">
                                        <CardImg className="Big-Img" src={__dirname+'img/'+imglist[index]} ></CardImg>
                                    </div>
                                </Col>
                            </Row>

                        <Row   >
                               
                                <div className="div-thumb-img"  ref={this.myRef}>
                                    {item.img.map((img,index) => ( 
                                        <Col   >  
                                        
                                            <CardImg className="Thumb-Img"  src={__dirname+'img/'+img} alt="" key={index}
                                             
                                             onClick={this.onClickImg.bind(this,index)}

                                             />
                                             
                                            
                                            
                                        </Col>
                                    ))}
                                </div>
                    
                            
                            
                    
                        </Row>
                </Col>

                <Col  className="col-info" >
                    
                    <div className="div-info">
                        <Col> 
                            <Row className="div-product-name"> <h3> {item.ProductName}  </h3> </Row>
                            <Row className="div-price"> Giá:  <p>{item.Price} </p> VND </Row>
                            <Row className="div-in-stock">  Số lượng trong kho : <p>{item.InStock} </p> </Row>
                            <Row className="div-description">  Mô Tả :<p> {item.Description} </p> </Row>
                            <Row className="div-quantity">  
                            
                                <div className="input-group">
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                                                <span className="glyphicon glyphicon-minus">-</span>
                                                </button>
                                            </span>
                                            <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" min="1" max="100"/>
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                                                    <span className="glyphicon glyphicon-plus">+</span>
                                                </button>
                                            </span>
                                </div>
                                
                            </Row>
                        </Col>
                    </div> 
                </Col>
               
      
      
            </Row>
        </Col>
    
    </Container>
   
  );
    
    }
}

export default ProductsDetail;