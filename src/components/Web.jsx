import CommonNavbar from "../commons/Navbar";
import CommonFooter from "../commons/Footer";
import image1 from "../imgs/img1.jpg";

function Web() {
  return (
    <div className="App">
      <CommonNavbar />
      <div className="Home">
        <img className="images" src={image1} alt="" />
        <div className="web">
          <div>
            <h1>W</h1>
            <h1>E</h1>
            <h1>B</h1>
          </div>
          <h2>
            Visualizador 3D /Maquetas Descarga de planos Agenda y visita
            Showroom Mapa de unidades disponibles Tipologías flotantes.
            Recorrido virtual interactivo. Recorrido fotorrealista. Reserva de
            unidades.
          </h2>
        </div>
        <button>contact</button>
      </div>
      <CommonFooter />
    </div>
  );
}

export default Web;
