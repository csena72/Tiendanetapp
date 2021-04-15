import React from "react";
import { Modal } from "react-bootstrap";
import { FormUser } from "./FormUser";

export const Checkout = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Datos del comprador
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormUser onHide={props.onHide} />
      </Modal.Body>
    </Modal>
  );
};
