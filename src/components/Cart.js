import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button, Table } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

export const Cart = () => {
  const context = useContext(CartContext);

  const handleTotal = () =>{
    const totals = context.cartState.map( product => {
      return product.item.price * product.quantity;
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return totals.reduce(reducer);
  } 

  return (
    <>
      <Row style={{ margin: "5em", borderBottom: "1px solid", color: "#e5e5e5" }}>
        <Col>
          <h1 style={{ color: "#212529"}}>Cart</h1>
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
              { context.cartState.length > 0 ? (
              <tbody>
                
                {context.cartState.map((product, index) => (
                    
                    <tr key={index}>
                        <td>
                        <Image
                            className="mx-auto d-block"
                            width="80px"
                            src={product.item.image}
                        />
                        </td>
                        <td  className="align-middle">{product.item.id}</td>
                        <td className="align-middle">{product.item.title}</td>
                        <td className="align-middle">{product.item.description}</td>
                        <td className="align-middle text-center">{product.quantity}</td>
                        <td className="align-middle text-right">${product.item.price}</td>
                        <td className="align-middle text-right">${product.item.price * product.quantity}</td>
                        <td className="align-middle">
                            <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => context.removeItemFromCart(product.item.id)}
                            ><MdDelete />
                            </Button>
                        </td>
                    </tr>
                    
                ))}
                <tr> 
                    <td colSpan={7}>
                        <span className="float-right">
                            Total: ${handleTotal()}       
                        </span>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan={8}>
                        <Button                            
                            variant="secondary"
                            size="sm"
                            block
                            onClick={() => context.removeAllitemsFromCart()}
                            ><MdDelete /> Eliminar todos los productos
                        </Button>
                    </td>
                </tr>
              </tbody>
              ) 
              :
              (
              <tbody>              
                <tr>
                    <td colSpan={8}>
                      <div className="alert alert-info text-center">No hay productos agregados.</div>
                    </td>
                </tr>
                <tr>                  
                  <td colSpan={8}>
                    <Link to={"/"} className="abtn">
                      <Button
                        style={{ marginTop: "0.1em" }}
                        variant="secondary"
                        size="sm"
                        block  
                      >
                        Ir al home
                      </Button>                      
                    </Link>
                  </td>                  
                </tr>
              </tbody>    
              )
            }
            </Table>
          </Col>
        </Row>      
    </>
  );
};
