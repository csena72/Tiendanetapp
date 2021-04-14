import React, { useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { MdDone } from "react-icons/md";
import CartContext from "../contexts/CartContext";

export const Checkout = (props) => {
  const { cartState, createOrder } = useContext(CartContext);

  const handleTotal = () => {
    const totals = cartState.map((product) => {
      return product.item.price * product.quantity;
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return totals.reduce(reducer);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre y apellido"
            />
            <Form.Text className="text-muted">
              Debe ingresar su nombre y apellido
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su teléfono" />
            <Form.Text className="text-muted">
              Debe ingresa su teléfono
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su e-mail" />
            <Form.Text className="text-muted">Debe ingresa su e-mail</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicReEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Reingrese su e-mail" />
            <Form.Text className="text-muted">
              Debe ingresa nuevamente su e-mail
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Acepto los términos y condiciones."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancelar
        </Button>
        <Button
          variant="success"
          onClick={() => {
            createOrder(cartState, handleTotal());
            props.onHide();
          }}
        >
          Realizar compra <MdDone />
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
