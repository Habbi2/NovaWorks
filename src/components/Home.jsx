import CommonNavbar from "../commons/Navbar";
import CommonFooter from "../commons/Footer";
import logo from "../imgs/logo.png";
import image1 from "../imgs/img1.jpg";

function Home() {
  return (
    <div className="App">
      <CommonNavbar />
      <div className="Home">
        <img className="logo" src={logo} width="700px" alt="" />
        <img className="images" src={image1} alt="" />
        <h2>Desarrollamos tu plan para un recorrido virtual de tu proyecto</h2>
        <button>contact</button>
      </div>
      <CommonFooter />
    </div>
  );
}

export default Home;
