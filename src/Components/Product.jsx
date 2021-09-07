import React, { Component } from 'react';
import { UncontrolledTooltip,  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardHeader, CardFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Product extends Component{
    render(){
        return(
            <Card className = "mb-2 mt-2">
                <CardHeader>
                    <CardImg top height="300px" style={{objectFit: "contain"}} src={`data:image/png;base64, ${this.props.product.image}`} alt="product image" />
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h5">{this.props.product.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Price: {this.props.product.price} Rs</CardSubtitle>
                    <CardText>Available qty: {this.props.product.qty}</CardText>
                </CardBody>
                <CardFooter>
                    <Button id={`view_${this.props.product.name}`} color="outline-danger" className="px-2 mx-2" onClick = {(e) => this.clickCartButton(this.props.product.id, this.props.product.name)}>View {this.props.product.name}</Button>
                    <UncontrolledTooltip placement="bottom" target={`view_${this.props.product.name}`}>View {this.props.product.name} </UncontrolledTooltip>
                    
                    <Button id={`add_to_cart_${this.props.product.id}`} color="outline-success" className="px-2 mx-2" onClick = {(e) => this.clickCartButton(this.props.product.id, this.props.product.name)}><i class="fas fa-cart-plus"></i></Button>
                    <UncontrolledTooltip placement="right" target={`add_to_cart_${this.props.product.id}`}>Add to cart</UncontrolledTooltip>
                </CardFooter>
            </Card>
        );
    }
    clickCartButton = (itemId, itemName) => {
        alert(`${itemName} is added in cart..!`)
    };
}

export default Product;