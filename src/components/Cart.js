import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Row, Col, Image, Button, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

export const Cart = () => {
  const context = useContext(CartContext);

  return (
    <>
      <Row style={{ margin: "5em", borderBottom: "1px solid" }}>
        <Col>
          <h1>Cart</h1>
        </Col>
      </Row>      
        <Row style={{ margin: "5em" }}>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="align-middle"></th>
                  <th className="align-middle">ID</th>
                  <th className="align-middle">Producto</th>
                  <th className="align-middle">Descripción</th>
                  <th className="align-middle">Cantidad</th>
                  <th className="align-middle text-center">Precio unitario</th>
                  <th className="align-middle text-center">Total</th>
                  <th></th>
                </tr>
              </thead>
              {context.cartState.item && (
              <tbody>
                <tr>
                  <td>
                    <Image
                      className="mx-auto d-block"
                      width="80px"
                      src={context.cartState.item.pictureUrl}
                    />
                  </td>
                  <td  className="align-middle">{context.cartState.item.id}</td>
                  <td className="align-middle">{context.cartState.item.title}</td>
                  <td className="align-middle">{context.cartState.item.description}</td>
                  <td className="align-middle text-center">{context.cartState.quantity}</td>
                  <td className="align-middle text-right">${context.cartState.item.price}</td>
                  <td className="align-middle text-right">${context.cartState.item.price * context.cartState.quantity}</td>
                  <td className="align-middle">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => context.removeItemFromCart(context.cartState.item.id)}
                      ><MdDelete />
                      </Button>
                  </td>
                </tr>
                <tr> 
                    <td colSpan={7}>
                        <span className="float-right">
                            Total: ${context.cartState.item.price * context.cartState.quantity}              
                        </span>
                    </td>
                    <td></td>
                </tr>
              </tbody>
              )}
            </Table>
            

            <Button
              style={{ marginTop: "0.3em" }}
              variant="secondary"
              size="sm"
              block
              onClick={() => context.removeAllitemsFromCart()}
            >
              Eliminar todos los productos
            </Button>
          </Col>
        </Row>      
    </>
  );
};
