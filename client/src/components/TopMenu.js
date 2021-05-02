
import './components-css/TopMenu.css'
import classNames from'classnames'
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
        this.ref=React.createRef();
        this.state={
            isOpen:false,
           TopMenuAdd: "StickyToTop"
        };
    }
    
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
            
        });
    }
   
    componentDidMount(){
      window.onscroll = function () {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
         this.setState({TopMenuAdd: "FixedToTop"});
        } else {
          this.setState({TopMenuAdd: "StickyToTop"});
          
        };
       
      
        
      }.bind(this)
    }
    render() { 
     
  return (
      
      <div className="Main-header">
        <div className="header-secondary">
          <a className="site-location"
            href="https://www.google.com/maps/search/1906%2014th%20Street%20NW%2C%20Washington%2C%20DC%2020009"
            target="_blank"
            rel="noreferrer" >  
            1906 14TH STREET NW, WASHINGTON, DC 20009
          </a>
          <a className="site-location__tel"
            href="tel:+2025187926"
            target="_blank"
            rel=" noreferrer" >
            
            
            (202) 518-7926
          </a>
        </div> 
       
          <Navbar id="HeaderPri" className={"header-primary " + this.state.TopMenuAdd}   light expand="md">
            <div className="site-logo">
            <Link className="site-logo-link" to="/" >
            <CardImg className="site-logo-img" src="https://images.getbento.com/accounts/f7efa3ac70fc351a1aa21cbd6bbe24c6/media/accounts/media/WX2bp9eRWSZt1sS77xwA_brescalogo2.png" alt="logo"></CardImg>
            </Link>
            </div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar inNavbar >
              <Nav className="ml-auto site-nav-menu" navbar>
                <NavItem>
                    
                    <Link to="/brescamenus/">Menus </Link>
                   
                </NavItem>
                <NavItem>
                    
                    <Link to="/products/">Our story</Link>
                   
                </NavItem>
                <NavItem>
                    <Link to="/categoryType/"> private events</Link>
                </NavItem>
                <NavItem>
                    <Link to="/categoryType/"> contanct</Link>
                </NavItem>
                <NavItem>
                    <a href="https://www.toasttab.com/bresca-dc/giftcards"
                     target="_blank" 
                     rel=" noreferrer">
                        gift card</a>
                </NavItem>
                <NavItem>
                    <a href="https://www.exploretock.com/bresca?tock_source=tock&tock_medium=search_nav"
                     target="_blank" 
                     rel=" noreferrer"> 
                     reservations </a>
                </NavItem>
                <NavItem className="brand">
                    <Link className="btn btn-brand" to="/categoryType/"> order now</Link>
                </NavItem>
              </Nav>
             
            </Collapse>
          </Navbar>
        
      </div>
      
      
    
  );
    
    }
}

export default TopMenu;