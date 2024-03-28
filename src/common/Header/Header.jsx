import { Navigator } from "../Navigator/Navigator"
import { useNavigate } from "react-router-dom";
import "./Header.css";
// export const Header = () => {
//   const token = false; //esto esta hardcodeadisimo,aqui va el token del back
//   return (
//     <div className="headerDesign">
//       <CustomLink title={"home"} path={"/"} />
//       {token ? (
//         <div className="menu"> 
//           <CustomLink title="Name" path="/login" />
//           <CustomLink title="Log-out" path="/log-out" />
//         </div>
//       ) : (
//         <div className="menu">
//           <CustomLink title="register" path="/register" />
//           <CustomLink title="login" path="/login" />
//         </div>
//       )}
//     </div>
//   );
// };
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
          <div onClick={logOut}>
            <Navigator title={"log out"} destination={"/"} />
          </div>
        </div>
      ) : (
        <div className="authMenu">
          <Navigator title={"register"} destination={"/register"} />
          <Navigator title={"login"} destination={"/login"} />
        </div>
      )}
    </div>
  );
};
