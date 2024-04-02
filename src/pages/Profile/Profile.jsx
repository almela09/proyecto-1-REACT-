import "./Profile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetProfile, UpdateProfile } from "../../Services/ApiCalls";
import { CInput } from "../../common/CInput/CInput";
import { Header } from "../../common/Header/Header";
import { CButton } from "../../common/CButton/CButton";

export const Profile = () => {
  const datosUser = JSON.parse(localStorage.getItem("passport"));
  const navigate = useNavigate();

  const [write, setWrite] = useState("disabled");
  const [tokenStorage, setTokenStorage] = useState(datosUser?.token);
  const [loadedData, setLoadedData] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [userError, setUserError] = useState({
    first_nameError: "",
    last_nameError: "",
    emailError: "",
  });

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkError = (e) => {};

  useEffect(() => {
    if (!tokenStorage) {
      navigate("/");
    }
  }, [tokenStorage]);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const fetched = await GetProfile(tokenStorage);

        setLoadedData(true);

        // const parsedBirth = dayjs(fetched.data.birth).format("YYYY-MM-DD");

        setUser({
          first_name: fetched.data.first_name,
          last_name: fetched.data.last_name,
          email: fetched.data.email,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (!loadedData) {
      getUserProfile();
    }
  }, [user]);

  console.log("a");
  console.log(tokenStorage);

  const updateData = async () => {
    try {
      const fetched = await UpdateProfile(tokenStorage, user);

      setUser({
        name: fetched.data.first_name,
        surname: fetched.data.last_name,
        email: fetched.data.email,
      });

      setWrite("disabled");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="profileDesign">
        {!loadedData ? (
          <div>CARGANDO</div>
        ) : (
          <div>
            <CInput
              className={`inputDesign ${
                userError.nameError !== "" ? "inputDesignError" : ""
              }`}
              type={"text"}
              placeholder={"nombre"}
              name={"first_name"}
              disabled={write}
              value={user.first_name || ""}
              onChangeFunction={(e) => inputHandler(e)}
              onBlurFunction={(e) => checkError(e)}
            />
            <CInput
              className={`inputDesign ${
                userError.surnameError !== "" ? "inputDesignError" : ""
              }`}
              type={"text"}
              placeholder={"apellido"}
              name={"last_name"}
              disabled={write}
              value={user.last_name || ""}
              onChangeFunction={(e) => inputHandler(e)}
              onBlurFunction={(e) => checkError(e)}
            />
            <CInput
              className={`inputDesign ${
                userError.emailError !== "" ? "inputDesignError" : ""
              }`}
              type={"email"}
              placeholder={"email"}
              name={"email"}
              disabled={"disabled"}
              value={user.email || ""}
              onChangeFunction={(e) => inputHandler(e)}
              onBlurFunction={(e) => checkError(e)}
            />
            <CButton
              className={
                write === "" ? "cButtonGreen cButtonDesign" : "cButtonDesign"
              }
              title={write === "" ? "Confirm" : "Edit"}
              functionEmit={write === "" ? updateData : () => setWrite("")}
            />
          </div>
        )}
      </div>
    </>
  );
};
