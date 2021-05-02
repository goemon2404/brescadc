
import './components-css/SignUp.css';

import React  from 'react';
import {  Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
//import { Link } from 'react-router-dom';


    class SignUp extends React.Component{
       
        render() { 
            return(
                <Container className="Container-SignUpform">
                <div className="div-SignUpform" >
                    <h3> Tạo Tài Khoản  </h3>
                    <Form className="form-SignUp">
                        <FormGroup>
                            <Label  for="exampleName">Họ và Tên</Label>
                            <Input  type="text" name="Name" id="exampleName" placeholder="Họ và Tên" />
                        </FormGroup>
                        <FormGroup>
                            <Label  for="exampleEmail">Email</Label>
                            <Input  type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Mật Khẩu</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Mật Khẩu" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Xác Nhận Mật Khẩu</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Nhập lại Mật Khẩu" />
                        </FormGroup>
                        
                       <div className="div-btn-SignUp">
                           <Button className="btn-SignUp"> TẠO TÀI KHOẢN </Button>
                       </div> 
                       
                    </Form>
                   
                </div>
            </Container>
            );
        }
    }

    export default SignUp;