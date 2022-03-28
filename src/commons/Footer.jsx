import notification1 from "../imgs/notification1.png";
import notification3 from "../imgs/notification3.png";
import notification4 from "../imgs/notification4.png";
import notification5 from "../imgs/notification5.png";
import { Navbar, Nav } from "react-bootstrap";

function CommonFooter() {
  return (
    <div className="CommonFooter">
      <Navbar>
        <Nav>
          <Nav.Link href="#home">
            <img src={notification4} alt="" />
          </Nav.Link>
          <Nav.Link href="#home">
            <img src={notification3} alt="" />
          </Nav.Link>
          <Nav.Link href="#home">
            <img src={notification5} alt="" />
          </Nav.Link>
          <Nav.Link href="#home">
            <img src={notification1} alt="" />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default CommonFooter;
