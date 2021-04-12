import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import { ItemCount } from "./ItemCount";
import { CgTwitter, CgFacebook, CgInstagram } from "react-icons/cg";

export const ItemDetail = ({ item }) => {
  const [stockActual, setStockActual] = useState(item.stock);

  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    setStockActual((stockActual) => stockActual - nuevoStock);
  };

  return (
    <>
      <Row
        style={{ margin: "3em", borderBottom: "1px solid", color: "#e5e5e5" }}
      >
        <Col>
          <h3 style={{ color: "#212529" }}>{item.title}</h3>
        </Col>
      </Row>
      <Row style={{ margin: "3em" }}>
        <Col lg={8} mb={4}>
          <div>
            <div className="main-product-image">
              <Image className="mx-auto d-block" src={item.image} />
            </div>
          </div>
        </Col>

        <Col lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <hr />
              <Card.Text className="float-right">
                Descripción: {item.description}
              </Card.Text>
              <Card.Text className="float-right">
                Precio: $ {item.price}
              </Card.Text>
              <ItemCount
                stock={stockActual}
                initial={1}
                onAdd={restarStock}
                item={item}
              />
              <Card.Text style={{ marginTop: "2em" }}>
                Compartir:
                <CgFacebook />
                <CgTwitter />
                <CgInstagram />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ margin: "3em" }}>
        <Col lg={5} xs={4}></Col>
        <Col lg={2} xs={4}>
          <Link to={"/"} className="abtn">
            <Button
              style={{ marginTop: "0.1em" }}
              variant="secondary"
              size="sm"
              block
            >
              Volver
            </Button>
          </Link>
        </Col>
        <Col lg={5} xs={4}></Col>
      </Row>
    </>
  );
};
