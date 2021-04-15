import React, { useContext, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { MdDone } from "react-icons/md";
import CartContext from "../contexts/CartContext";
import { calculateTotal } from "../helpers/calculateTotal";

export const Checkout = (props) => {
  const { cartState, createOrder } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    reEmail: ""    
  });

  const [validated, setValidated] = useState(false);

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setErrors({});
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();    
    console.log(buyer);
    if(buyer.name === '' || buyer?.name.length < 4){
      setErrors({ name: 'El campo debe ser mayor a 4 caracteres'});
      return;
    }

    if(buyer.phone === '' || buyer.phone.length < 4 ){
      setErrors({ phone: 'El campo debe ser numerico y mayor a 4 caracteres'});
      return;
    }
    
    if(buyer.email === '' ){
      setErrors({ email: 'El e-mail es requerido'});
      return;
    }

    if(buyer.email !== buyer.reEmail){
      setErrors({ reEmail: 'Los e-mails no coinciden'});
      return;
    }

    setValidated(true);

    createOrder(buyer, cartState, calculateTotal(cartState));
    props.onHide();
  };

  const handleCancel = () => {
    setBuyer({
      name: "",
      phone: "",
      email: "",
      reEmail: "",     
    });
    setErrors({});    
    props.onHide()
  }
 
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Datos del comprador</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={sendData}>
          <Form.Group controlId="formBasicName">
            <Form.Label>* Nombre y apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre y apellido"
              name="name"
              onChange={handleInputChange}
              isInvalid={!!errors.name}
              required
            />
            <Form.Text className="text-muted">              
              <span className="text-danger d-block mb-2">
                {errors?.name}
              </span>
            </Form.Text>

          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>* Teléfono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su teléfono"
              name="phone"
              onChange={handleInputChange}
              isInvalid={!!errors.phone} 
              required
            />
            <Form.Text className="text-muted">
            <span className="text-danger d-block mb-2">
                {errors?.phone}
              </span>
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>* E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su e-mail"
              name="email"
              onChange={handleInputChange}
              isInvalid={!!errors.email} 
              required
            />
            <Form.Text className="text-muted">Debe ingresa su e-mail</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicReEmail">
            <Form.Label>* E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Reingrese su e-mail"
              name="reEmail"
              onChange={handleInputChange}
              isInvalid={!!errors.reEmail}              
              required
            />
            <Form.Text className="text-muted">
            <span className="text-danger d-block mb-2">
                {errors?.reEmail}
              </span>
            </Form.Text>
          </Form.Group>
          <Button variant="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button className="float-right" type="submit" variant="success">
            Realizar compra <MdDone />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
