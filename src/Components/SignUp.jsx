import React, { Component } from 'react';
import { Card, CardTitle, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import $ from "jquery";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { sessionToken: null }
    }
    render() {
        return (
            <>
                
                <Card className ="px-5 py-5 mx-auto my-auto">
                    <CardTitle className="h3">Get Register</CardTitle>
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <FormGroup className="mb-2">
                            <Label style={{display: "flex"}}>Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" required/>
                        </FormGroup>
                        <FormGroup className="mb-2 mt-2">
                            <Label style={{display: "flex"}}>Password</Label>
                            <Input type="password" name="password" id="Password" placeholder="********"  required/>
                        </FormGroup>
                        <FormGroup className="mb-2 mt-2">
                            <Label style={{display: "flex"}}>Re-Enter password</Label>
                            <Input type="password" name="re-password" id="re-password" placeholder="********" required/>
                        </FormGroup>
                        <Button type="submit" color = "primary" className = "mt-2">Submit</Button>
                    </Form>
                </Card>
            </>
        );
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if( $("#Password").val() === $("#re-password").val() ){
            var email = e.target.email.value
            var password = e.target.password.value
            axios.request({
                method: 'GET',
                url: `https://react-on-rails-backend.herokuapp.com/users/sign_up`,
                params: {
                    email: email,
                    password: password
                }
            }
            ).then(function(res){
                alert(res.data.message)
            })
            .catch(function(err){
                alert("Email already taken")
            });
        }else{
            alert("Password not match in both fields")
        }
    };
}
 
export default SignUp;