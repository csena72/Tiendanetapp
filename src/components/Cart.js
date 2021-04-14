import React, { useContext, useState } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Button,
  Table   
} from "react-bootstrap";
import { MdDelete, MdDone } from "react-icons/md";

import { formatNumber } from "../helpers/formatNumer";
import { calculateTotal } from "../helpers/calculateTotal";
import { Checkout } from "./Checkout";

export const Cart = () => {
  const {
    cartState,
    removeItemFromCart,
    removeAllitemsFromCart    
  } = useContext(CartContext);

  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Row
        style={{ margin: "5em", borderBottom: "1px solid", color: "#e5e5e5" }}
      >
        <Col>
          <h1 style={{ color: "#212529" }}>Carrito</h1>
        </Col>
      </Row>
      <Row style={{ margin: "5em" }}>
        <Col>
          <Table responsive size="sm">
            <thead>
              <tr className="no-border">
                <th className="align-middle"></th>
                <th className="align-middle">Producto</th>
                <th className="align-middle">Descripción</th>
                <th className="align-middle">Cantidad</th>
                <th className="align-middle text-center">Precio unitario</th>
                <th className="align-middle text-center">Total</th>
                <th></th>
              </tr>
            </thead>
            {cartState.length > 0 ? (
              <tbody>
                {cartState.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <Image
                        className="mx-auto d-block"
                        width="80px"
                        src={product.item.image}
                      />
                    </td>
                    <td className="align-middle">{product.item.title}</td>
                    <td className="align-middle">{product.item.description}</td>
                    <td className="align-middle text-center">
                      {product.quantity}
                    </td>
                    <td className="align-middle text-right">
                      {formatNumber(product.item.price)}
                    </td>
                    <td className="align-middle text-right">
                      {formatNumber(product.item.price * product.quantity)}
                    </td>
                    <td className="align-middle">  
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => removeItemFromCart(product.item.id)}
                        >
                          <MdDelete />
                        </Button>                      
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={7}>
                    <strong className="float-right">
                      Total: {calculateTotal(cartState)}
                    </strong>
                  </td>
                  <td></td>
                </tr>
                <tr className="no-border">
                  <td colSpan={12}>
                    <Button
                      variant="success"
                      size="sm"
                      className="float-right"                      
                      onClick={() => setModalShow(true)}
                    >
                      Finalizar la compra <MdDone />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={12} className="text-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => removeAllitemsFromCart()}
                    >
                      Eliminar todos los productos <MdDelete />
                    </Button>
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={8}>
                    <div className="alert alert-info text-center">
                      No hay productos agregados.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={12} className="text-center">
                    <Link to={"/"} className="abtn">
                      <Button
                        style={{ marginTop: "0.1em" }}
                        variant="secondary"
                        size="sm"
                      >
                        Ir al home
                      </Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            )}
          </Table>
        </Col>
      </Row>
      <Checkout show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
