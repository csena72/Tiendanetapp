import { useEffect, useState } from "react";
import { getFirestore } from "../configs/firebase";
import { CartWidget } from "./CartWidget";

import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export const NavBar = () => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    const db = getFirestore();
    const categories = db.collection("categories");

    categories
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        setState({ data: querySnapshot.docs.map((doc) => doc.data()) });
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
  }, []);

  const { data: items } = state;

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <Image src={"/logo.png"} />
          TiendaNet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {items.map((category, index) => (
                <NavDropdown.Item key={index} href={"/itemList/" + category.id}>
                  {category.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/help">Ayuda</Nav.Link>
            <CartWidget />
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <Button variant="outline-info">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
