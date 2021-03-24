import { CartWidget } from "./CartWidget";

import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Form,
  FormControl,
  Button
} from 'react-bootstrap'

function NavBar() {
    return (
        <>
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
          <Navbar.Brand href="/"><Image src={"/logo.png"} /> 
          TiendaNet
                        
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">              
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="/itemList/1">Tecnología</NavDropdown.Item>                
                <NavDropdown.Item href="/itemList/3">Hogar Y Muebles</NavDropdown.Item>
                <NavDropdown.Item href="/itemList/4">Electrodomésticos</NavDropdown.Item>
                <NavDropdown.Item href="/itemList/5">Herramientas y Construcción</NavDropdown.Item>
                <NavDropdown.Item href="/itemList/6">Juguetes Y Bebés</NavDropdown.Item>
                <NavDropdown.Item href="/itemList/7">Deportes y Fitness</NavDropdown.Item>
                <NavDropdown.Item href="/itemList/8">Belleza y salud</NavDropdown.Item>
                <NavDropdown.Item href="/itemList/9">Industrias y Oficinas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/itemList/2">Moda</NavDropdown.Item>
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
  }
  
  export default NavBar;