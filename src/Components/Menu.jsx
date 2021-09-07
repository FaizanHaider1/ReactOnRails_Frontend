import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] }
    }
    async componentWillMount() {
        // await axios.get('http://localhost:5000/products')
        await axios.get('https://react-on-rails-backend.herokuapp.com/products')
            .then(res => {
            this.setState({ products: JSON.parse(res.data.products) });
        })
    }

    render() { 
        const itemsInStore = this.state.products.map((product) => {
                return (
                    <Col lg = "3" md = "4" sm = "6" xs = "12"><Product product = {product}/></Col>
                );
            });
        
        return ( 
            <Row className="container-fluid">
                {itemsInStore}
            </Row>
        );
    }
}
 
export default Menu;