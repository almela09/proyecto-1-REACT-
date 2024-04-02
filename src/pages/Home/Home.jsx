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
                text="WELCOME TO MICHI TATTOO"
                fontSize="60px"
                color="blue"
                fontFamily="Impact"
              />
              <div className="containerDesign">
                <Tipografia
                  text="Donde nada de la página funciona :), si quieres mas info pues estas fastidiado."
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
