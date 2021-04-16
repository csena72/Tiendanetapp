import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { MdDone } from "react-icons/md";
import CartContext from "../contexts/CartContext";
import { calculateTotal } from "../helpers/calculateTotal";

export const FormUser = ({ onHide }) => {
  const { cartState, createOrder } = useContext(CartContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  const onSubmit = (data, e) => {
    createOrder(data, cartState, calculateTotal(cartState));
    e.target.reset();
    onHide();
  };

  const handleCancel = () => {
    onHide();
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicUserName">
        <Form.Label>* Nombre y apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su nombre y apellido"
          name="userName"
          {...register("userName", {
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: {
              value: 30,
              message: "No más de 30 carácteres!",
            },
            minLength: {
              value: 4,
              message: "Mínimo 4 carácteres",
            },
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.userName && errors.userName.message}
          </span>
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Label>* Teléfono</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su teléfono"
          name="phone"
          {...register("phone", {
            required: {
              value: true,
              message: "El teléfono es requerido",
            },
            pattern: {
                value: /^[0-9]+$/i ,
                message: "Debe ingresar un teléfono válido",
              },
              minLength: {
                value: 8,
                message: "Mínimo 8 dígitos",
              },
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.phone && errors.phone.message}
          </span>
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>* E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su e-mail"
          name="email"
          {...register("email", {
            required: {
              value: true,
              message: "El email es requerido",
            },
            pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
                message: "Debe ingresar un email válido",
              }
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.email && errors.email.message}
          </span>
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicReEmail">
        <Form.Label>* E-mail</Form.Label>
        <Form.Control
          type="email"
          placeholder="Reingrese su e-mail"
          name="reEmail"
          {...register("reEmail",  {
            validate: value => value === getValues("email")
          })}
        />
        <Form.Text className="text-muted">
          <span className="text-danger d-block mb-2">
            {errors.reEmail && 'Los campos de e-mail deben ser iguales'}
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
  );
};
