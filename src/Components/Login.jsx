import React, { Component } from 'react';
import { Card, CardTitle, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { sessionUser: null, showPassword: false }
    }
    render() {
        return (
            <>
                <Card className ="px-5 py-5 mx-auto my-auto">
                    <CardTitle className="h3">Sign In</CardTitle>
                    <Form onSubmit={(e) => this.handleSubmit(e,this)}>
                        <FormGroup className="mb-2">
                            <Label style={{display: "flex"}}>Username</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" required/>
                        </FormGroup>
                        <FormGroup className="mb-2 mt-2 ">
                            <Label style={{display: "flex"}}>Password</Label>
                            <div style={{position:"inherit"}}>
                                <Input type={this.state.showPassword ? "text" : "password"} name="password" id="examplePassword" placeholder="********" style={{position:"absolute", width:"inherit"}} required/>
                                <i className="fas fa-eye-slash float-end" onClick={(e) => this.handelShowPassword(e)} style={{position:"relative", top:"10px", right:"5px"}}></i>
                            </div>
                        </FormGroup>
                        <Button type="submit" color = "primary" className = "mt-2" style={{position: "relative", bottom: "-40px"}}>Login</Button>
                    </Form>
                </Card>
            </>
        );
    }
    handleSubmit = (e,that) => {
        e.preventDefault()
        var email = e.target.email.value
        var password = e.target.password.value
        axios.request({
            method: 'POST',
            url: `http://localhost:5000/users/sign_in`,
            // url: `https://react-on-rails-backend.herokuapp.com/users/sign_in`,
            params: {
                email: email,
                password: password
            }
        }
        ).then(function(res){
            alert(res.data.message)
            if(res.data.is_authenticated){
                that.setState({ sessionUser: res.data.user });
                localStorage.setItem('user_name',JSON.stringify(res.data.user.email))
                that.props.history.push('/products')
            }
        }).catch(function(err){
            alert(err.message)
        });
    };

    handelShowPassword = (e)=>{
        if(this.state.showPassword){
            this.setState({ showPassword: false });
            e.target.classList.remove("fa-eye-slash")
            e.target.classList.add("fa-eye")
        }
        else{
            this.setState({ showPassword: true });
            e.target.classList.remove("fa-eye")
            e.target.classList.add("fa-eye-slash")
        }
    };
}
 
export default Login;