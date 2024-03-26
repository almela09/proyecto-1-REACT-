import "./Header.css";
import { CustomLink } from "../CustomLink/CustomLink";

export const Header = () => {
  return (
    <div className="headerDesign">
        <CustomLink 
        title={"home"} 
        path={"/"} />
      <CustomLink 
      title={"register"} 
      path={"/register"} />
      <CustomLink
       title={"login"} 
       path={"/login"} />
    </div>
  );
};
