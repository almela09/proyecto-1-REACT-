import { Tipografia } from "../../common/Tipografia/Tipografia";
import { Header } from "../../common/Header/Header";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />

      <div className="homeDesign">
        <div className="cardHomeDesign">
          <div className="welcomeDesign">
            
            <h1>
              <Tipografia
                text="Welcome to MICHI TATTOO"
                fontSize="60px"
                color="blue"
                fontFamily="Impact"
              />
              <div className="containerDesign">
                <Tipografia
                  text="Expertos en tatuajes estilo acuarela, visitanos en Alameda Jaime I 19, Xàtiva."
                  fontSize="25px"
                  color="blue"
                  fontFamily="Arial"
                />
              </div>
            </h1>
            <p> </p>
          </div>
        </div>
      </div>
    </>
  );
};
