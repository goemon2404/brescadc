
import './components-css/Login.css';

import React  from 'react';

import { Container,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';


    class Login extends React.Component{
       
        render() { 
            return(
                <Container className="Container-loginform">
                    <div className="div-loginform" >
                        <h3> Đăng Nhập  </h3>
                        <Form className="form-login">
                            <FormGroup>
                                <Label  for="exampleEmail">Email</Label>
                                <Input  type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Mật Khẩu</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Mật Khẩu" />
                            </FormGroup>
                            
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox"/>{' '}
                                Lưu đăng nhập
                                </Label>
                            </FormGroup>
                            <div className="div-forgot"> <Link to="/forgotPassword">Quên mật khẩu ?</Link>
                            </div>
                           <div className="div-btn-login">
                               <Button className="btn-login"> Đăng Nhập  </Button>
                           </div> 
                           
                        </Form>
                       <div><Link to="/Sign-Up">Đăng ký tài khoản ?</Link>
                       </div>
                    </div>
                </Container>
            );
        }
    }

    export default Login;