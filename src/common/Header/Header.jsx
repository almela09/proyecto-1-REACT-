import { Navigator } from "../Navigator/Navigator";
import { useNavigate } from "react-router-dom";
import {Tipografia} from "../Tipografia/Tipografia"
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const passport = JSON.parse(localStorage.getItem("passport"));

  console.log(passport?.decodificado);

  const logOut = () => {
    localStorage.removeItem("passport");
    navigate("/login");
  };

  return (
    <div className="headerDesign">
      <div className="letraDesign">
        <Tipografia
          text="Michi Tattoo"
          fontSize="43px"
          color="white"
          fontFamily="Impact"
        />
      </div>
      <Navigator title={"home"} destination={"/"} />

      {passport?.token ? (
        <div className="authMenu">
          <Navigator
            title={`user id: ${passport?.decodificado?.userId}`}
            destination={"/profile"}
          />
          <Navigator title={"appointments"} destination={"/appointments"} />
          <Navigator title={"servicios"} destination={"/servicios"} />
          
          {passport.decodificado.roleName === "super_admin" && (
            <Navigator title={"admin"} destination={"/admin"} />
          )}

          
          <div onClick={logOut}>
            <Navigator title={"log out"} destination={"/"} />
          </div>
        </div>
      ) : (
        <div className="authMenu">
          <Navigator title={"register"} destination={"/register"} />
          <Navigator title={"login"} destination={"/login"} />
          <Navigator title={"servicios"} destination={"/servicios"} />
        </div>
      )}
    </div>
  );
};

