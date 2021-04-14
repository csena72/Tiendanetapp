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
    reEmail: "",
    terms: "off",
  });

  const handleInputChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    createOrder(buyer, cartState, calculateTotal(cartState));
    props.onHide();
  };

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
        <Form onSubmit={sendData}>
          <Form.Group controlId="formBasicName">
            <Form.Label>* Nombre y apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre y apellido"
              name="name"
              onChange={handleInputChange}
              required
            />
            <Form.Text className="text-muted">
              Debe ingresar su nombre y apellido
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>* Teléfono</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su teléfono"
              name="phone"
              onChange={handleInputChange}
              required
            />
            <Form.Text className="text-muted">
              Debe ingresa su teléfono
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>* E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su e-mail"
              name="email"
              onChange={handleInputChange}
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
              required
            />
            <Form.Text className="text-muted">
              Debe ingresa nuevamente su e-mail
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Acepto los términos y condiciones."
              name="terms"
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Button variant="secondary" onClick={props.onHide}>
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
