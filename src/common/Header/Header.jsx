import "./Header.css";
import { CustomLink } from "../CustomLink/CustomLink";

export const Header = () => {
  const token = false; //esto esta hardcodeadisimo,aqui va el token del back
  return (
    <div className="headerDesign">
      <CustomLink title={"home"} path={"/"} />
      {token ? (
        <div className="menu"> 
          <CustomLink title="Name" path="/login" />
          <CustomLink title="Log-out" path="/log-out" />
        </div>
      ) : (
        <div className="menu">
          <CustomLink title="register" path="/register" />
          <CustomLink title="login" path="/login" />
        </div>
      )}
    </div>
  );
};
