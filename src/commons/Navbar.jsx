import { Navbar, Nav, Container } from "react-bootstrap";
import notification1 from "../imgs/notification1.png";
import notification2 from "../imgs/notification2.png";
import notification3 from "../imgs/notification3.png";

function CommonNavbar() {
  return (
    <div className="CommonNavbar">
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">NovaWorks</Nav.Link>
              <Nav.Link href="web">Web</Nav.Link>
              <Nav.Link href="app3dar">APP 3D AR</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="right-nav">
            <Nav.Link href="/">
              <img src={notification1} alt="" width="25px" />
            </Nav.Link>
            <Nav.Link href="/">
              <img src={notification2} alt="" width="25px" />
            </Nav.Link>
            <Nav.Link href="/">
              <img src={notification3} alt="" width="25px" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default CommonNavbar;
