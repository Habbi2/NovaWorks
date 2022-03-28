import CommonNavbar from "../commons/Navbar";
import CommonFooter from "../commons/Footer";
import image1 from "../imgs/img1.jpg";

function App3dar() {
  return (
    <div className="App">
      <CommonNavbar />
      <div className="Home">
        <img className="images-app3dar" src={image1} alt=""/>
        <div className="web">
          <div>
            <h1>A</h1>
            <h1>P</h1>
            <h1>P</h1>
            <h1>3D</h1>
            <h1>AR</h1>
          </div>
          <h2>
            Visualizador 3D Descarga de planos Agenda de visitas a Showroom Mapa
            de unidades disponibles
          </h2>
        </div>
        <button>contact</button>
      </div>
      <CommonFooter />
    </div>
  );
}

export default App3dar;
