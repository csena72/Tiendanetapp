import { Row, Col, Image, Card } from "react-bootstrap";

import { useState } from "react";
import { ItemCount } from "./ItemCount";
import { CgTwitter,CgFacebook, CgInstagram } from 'react-icons/cg';



export const ItemDetail = ({ item }) => {

  const [stockActual, setStockActual] = useState(item.stock);

  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    
    setStockActual((stockActual) => stockActual - nuevoStock);
  };

  return (
  <>
    <Row style={{ margin: "3em", borderBottom:"1px solid", color: "#e5e5e5"}}>
      <Col><h3 style={{ color: "#212529"}}>{item.title}</h3></Col>
      </Row>
    <Row style={{ margin: "3em"}}>
      <Col lg={8} mb={4}>
        <div class="">
          <div className="main-product-image">
            <Image className="mx-auto d-block" src={item.pictureUrl} />
          </div>
        </div>
      </Col>

      <Col lg={4}>
        <Card>
          <Card.Body>
            <Card.Title >{item.title}</Card.Title>
            <hr />
            <Card.Text className="float-right">Descripción: {item.description}</Card.Text>
            <Card.Text className="float-right">Precio: $ {item.price}</Card.Text>
            <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
            <Card.Text style={{marginTop:"2em"}}>
              Compartir: 
              <CgFacebook /> 
              <CgTwitter/> 
              <CgInstagram />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </>
  );
};
