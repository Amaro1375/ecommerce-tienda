import { useState } from "react";
import Titulo from "./componentes/Titulo/Titulo";
import Footer from "./componentes/Footer/Footer";
import NavBar from "./componentes/Navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Titulo titulo=' soy un titulo' subtitulo='Soy el subtitulo' />
      <Footer />
    </div>
  );
}

export default App;
