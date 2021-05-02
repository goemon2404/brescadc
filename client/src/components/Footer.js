
import './components-css/Footer.css'

import React  from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
 
  Nav,
  NavItem,
 
  CardImg,
} from 'reactstrap';
import $ from 'jquery'; 
import { Link } from 'react-router-dom';

class TopMenu extends React.Component{
    constructor(props){
        super(props); 
        this.toggle = this.toggle.bind(this);
        this.state={
            isOpen:false,
            FooterPriAdd:"FixedToBottom"
        };
    }
    
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    // componentDidMount(){
    //   window.onscroll = function () {
    //     if (document.body.scrollHeight-document.body.clientHeight-document.body.scrollTop >= 45 || document.documentElement.scrollHeight-document.documentElement.clientHeight-document.documentElement.scrollTop >= 45) {
    //       this.setState({FooterPriAdd: "FixedToBottom"});
    //     } else {
    //       this.setState({FooterPriAdd: "StickyToBottom"});
          
    //     };
        
        
    //   }.bind(this)
    // }
    render() {
  return (
      
      <div className="Main-footer">
        <div className="footer-secondary">
          <div className="footer-logo">
            <Link className="site-logo" to="https://guide.michelin.com/us/washington-dc/search?q=bresca" target="_blank" rel="noopener" >  
            <CardImg 
              src="https://images.getbento.com/accounts/f7efa3ac70fc351a1aa21cbd6bbe24c6/media/images/michelin.png?w=300&fit=max&auto=compress,format"
              loading="lazy" 
              alt="Hospitality Image 1"
            />
            </Link>
          </div>
        </div> 
       
          <Navbar id="FooterPrimary" className={"footer-primary "+  this.state.FooterPriAdd}  light expand="md">
            <div className="site-logo">
            <div class="mb-4">
           
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab facebook"></i
            ></a>

            
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-twitter"></i
            ></a>

            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-instagram"></i
            ></a>

            
            
          </div>
            </div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar inNavbar >
              <Nav className="ml-auto site-nav-menu" navbar>
                <NavItem>
                    
                    <Link to="/">MICHELIN GUIDE 2020 </Link>
                   
                </NavItem>
                <NavItem>
                    
                    <Link to="/products/">Careers</Link>
                   
                </NavItem>
                <NavItem>
                    <Link to="/categoryType/"> Buzz </Link>
                </NavItem>
                <NavItem>
                    <Link to="/categoryType/"> Covid-19 </Link>
                </NavItem>
                <NavItem className="email-signup">
                    <Link className="btn btn-email-signup" to="/categoryType/"> Email Signup</Link>
                </NavItem>
              </Nav>
             
            </Collapse>
          </Navbar>
        <div className="footer-site-powered-by">
          <div className="site-powered-by">
            <Link 
                  to="https://getbento.com/?utm_source=footer&utm_campaign=brescadc.com" 
                  target="_blank"
                  rel="noopener"> powered by BentoBox </Link>
          </div>
        </div>
      </div>
      
    
  );
    
    }
}

export default TopMenu;