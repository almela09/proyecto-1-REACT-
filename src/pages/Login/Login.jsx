import { useState, useEffect } from "react";
import { CustomInput } from "../../common/CustomInput/CustomInput";
import "./Login.css";
import { loginMe } from "../../Services/ApiCalls";

export const Login = () => {
  const[credenciales, setCredenciales] = useState({
    email:"",
    password:""
  })
  const inputHandler =(e)=>{
    setCredenciales((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value,

    }))
  };

  const logMe = async()=>{
    const fetched = await loginMe(credenciales)
    console.log(fetched.results)
  }
  return (
    <div className="loginDesign">
      {/* <pre>{JSON.stringify(credenciales)}</pre> */}
    <CustomInput
      design= "inputDesign"
      type= "email"
      name="email"
      value= {credenciales.email || ""}
      placeholder="escribe tu email"
      functionChange={inputHandler}
        
    />
      <CustomInput
      design= "inputDesign"
      type= "password"
      name="password"
      value= {credenciales.password || ""}
      placeholder="escribe tu contraseña"
      functionChange={inputHandler}
        
    />
    <div className="loginButton"onClick={logMe}>logueate ejtupido</div>
  </div>
  
  )
};
