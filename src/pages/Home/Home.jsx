import { Tipografia } from "../../common/Tipografia/Tipografia";
import { Header } from "../../common/Header/Header";
import "./Home.css";


export const Home = () => {
  return (
    <>
   
      <Header />
     
   
      <div className="homeDesign"> 
     
      <div className= "cardHomeDesign">
      <div className="welcomeDesign">HOLA CARACOLA
      <h1> 
      <Tipografia
                text="WELCOME TO MICHI TATTOO"
                fontSize="60px"
                color="blue"
                fontFamily="Impact"
            />
            <div className="containerDesign">
            <Tipografia
                text="Situados en el centro de Valencia a dos pasos de la Estacion del Nord, visitanos para conocernos."
                fontSize="25px"
                color="blue"
                fontFamily="Arial"
            />
            </div>
      </h1>
      <p> soy un maldito parrafo y aqui escribo cosas </p>
      </div>
      
      </div> 
      
      </div>
     
   
    </>
  );
};
