import { CartWidget } from "./CartWidget";

function NavBar() {

    return (
        <>
       <nav>
          <div>
            <a href="/">
              <img src="/logo.png" alt="TiendaNet" />
            </a>
            <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span ></span>
            </button>
            <div id="navbarSupportedContent">
              <ul>
                <li>
                  <a href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                  </a>
                  <ul  aria-labelledby="navbarDropdownMenuLink">
                    <li><a href="/">Tecnología</a></li>
                    <li><a href="/">Hogar Y Muebles</a></li>
                    <li><a href="/">Electrodomésticos</a></li>
                    <li><a href="/">Herramientas y Construcción</a></li>
                    <li><a href="/">Juguetes Y Bebés</a></li>
                    <li><a href="/">Deportes y Fitness</a></li>
                    <li><a href="/">Moda</a></li>
                    <li><a href="/">Belleza y salud</a></li>
                    <li><a href="/">Industrias y Oficinas</a></li>
                    <li><a href="/">Servicios</a></li>                                        
                  </ul>
                </li>
                <li >
                  <a aria-current="page" href="/">Ofertas</a>
                </li>                
                <li>
                  <a href="/">Ayuda</a>
                </li>
                <li>
                  <CartWidget />
                </li>
              </ul>
              <form >
                <input  type="search" placeholder="Buscar" aria-label="Buscar" />
                <button type="submit">Buscar</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default NavBar;