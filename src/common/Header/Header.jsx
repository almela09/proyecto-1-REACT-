import { Navigator } from "../Navigator/Navigator";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const navigate = useNavigate();
  const passport = JSON.parse(localStorage.getItem("passport"));

  const logOut = () => {
    localStorage.removeItem("passport");
    navigate("/login");
  };

  return (
    <div className="headerDesign">
      <Navigator title={"home"} destination={"/"} />

      {passport?.token ? (
        <div className="authMenu">
          <Navigator
            title={passport?.decodificado?.first_name}
            destination={"/profile"}
          />
          <Navigator title={"appointments"} destination={"/appointments"} />
          <Navigator title={"servicios"} destination={"/services"} />
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
