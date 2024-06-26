import { useState, useEffect } from "react";
import { decodeToken } from "react-jwt";
import { CButton } from "../../common/CButton/CButton";
import { CInput } from "../../common/CInput/CInput";
import { validame } from "../../utils/functions";
import "./Login.css";
import { LoginUser } from "../../Services/ApiCalls";
import { useNavigate } from "react-router-dom";
import { Header } from "../../common/Header/Header";
import { Tipografia } from "../../common/Tipografia/Tipografia";
export const Login = () => {
  const datosUser = JSON.parse(localStorage.getItem("passport"));
  const navigate = useNavigate();
  const [tokenStorage, setTokenStorage] = useState(datosUser?.token);

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [msgError, setMsgError] = useState("");

  useEffect(() => {
    if (tokenStorage) {
      navigate("/");
    }
  }, [tokenStorage]);

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {
    const error = validame(e.target.name, e.target.value);

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const loginMe = async () => {
    try {
      for (let elemento in credenciales) {
        if (credenciales[elemento] === "") {
          throw new Error("Todos los campos tienen que estar rellenos");
        }
      }

      const fetched = await LoginUser(credenciales);

      const decodificado = decodeToken(fetched.token);

      const passport = {
        token: fetched.token,
        decodificado: decodificado,
      };

      localStorage.setItem("passport", JSON.stringify(passport));

      setMsgError(`Hola ${decodificado.name}, bienvenido a Michi Tattoo`);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMsgError(error.message);
    }
  };

  return (
    <>
      <Header />
      
      <div className="loginDesign">
      <Tipografia
          text="Logueate"
          fontSize="30px"
          color="blue"
          fontFamily="Impact"
        />
        <CInput
          className={`inputDesign ${
            credencialesError.emailError !== "" ? "inputDesignError" : ""
          }`}
          type={"email"}
          placeholder={"email"}
          name={"email"}
          disabled={""}
          value={credenciales.email || ""}
          onChangeFunction={(e) => inputHandler(e)}
          onBlurFunction={(e) => checkError(e)}
        />
        <div className="error">{credencialesError.emailError}</div>
        <CInput
          className={`inputDesign ${
            credencialesError.passwordError !== "" ? "inputDesignError" : ""
          }`}
          type={"password"}
          placeholder={"password"}
          name={"password"}
          disabled={""}
          value={credenciales.password || ""}
          onChangeFunction={(e) => inputHandler(e)}
          onBlurFunction={(e) => checkError(e)}
        />
        <div className="error">{credencialesError.passwordError}</div>

        <CButton
          className={"cButtonDesign"}
          title={"Login"}
          functionEmit={loginMe}
        />
        <div className="error">{msgError}</div>
      </div>
    </>
  );
};
