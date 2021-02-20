import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import {WebsiteRoutes} from "../pages/routes.js";
import {Link} from "react-router-dom";
import "./site_navbar.scss";
import logo from "./logo.png";

export default function SiteNavbar() {
  return (
    <nav>
      <header id={"header"}>
        <Container>
          <Navbar expand="md" variant="light" bg="light">
            <Navbar.Brand href="#">
              <img src={logo} alt="Logo"/>
            </Navbar.Brand>
            <Nav className="mr-auto">
              {
                WebsiteRoutes.map(r => (
                  <Nav.Link href={r.route}>{r.title}</Nav.Link>
                ))
              }
            </Nav>
          </Navbar>
        </Container>
      </header>
    </nav>
  );
}