import React, { useState } from 'react';
import { CardImg, UncontrolledTooltip, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ItemDetails = (props) => {
  const {
    buttonLabel,
    classname,
    productName,
    productId,
    productPrice,
    productQty,
    productImage
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const clickCartButton = (itemId, itemName) => {
    alert(`${itemName} is added in cart..!`)
  };

  return (
    <>
      <Button className={classname} id={`view_${productName}`} color="outline-danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal style={{marginTop : "8rem"}} isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} /*charCode="Y"*/>{props.productName}</ModalHeader>
        <ModalBody>
        <CardImg top height="300px" style={{objectFit: "contain"}} src={`data:image/png;base64, ${productImage}`} alt="product image" />
          <p className="mt-3 mb-0">This is {productName}</p>
          
        </ModalBody>
        <ModalFooter>
          <span className="row m-auto py-1">
              <p className="col-5">Price: {productPrice} Rs</p>
              <p className="col ">Available qty: {productQty}</p>
              <Button id={`add_to_cart_${productId}`} color="outline-success" onClick = {(e) => clickCartButton(productId, productName)}><i class="fas fa-cart-plus"></i></Button>
              <UncontrolledTooltip placement="bottom" target={`add_to_cart_${productId}`}>Add to cart</UncontrolledTooltip>
          </span>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ItemDetails;