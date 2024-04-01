import "./Admin.css";
import { CButton } from "../../common/CButton/CButton";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../../Services/ApiCalls";
import { useEffect, useState } from "react";
import { Tipografia } from "../../common/Tipografia/Tipografia";
import { Header } from "../../common/Header/Header";
export const Admin = () => {
  const dataUser = JSON.parse(localStorage.getItem("passport"));

  if (dataUser.decodificado.roleName !== "super_admin") {
    navigate("/");
    return null;
  }

  const [Users, setUsers] = useState([]);
  const [tokenStorage, setTokenStorage] = useState(dataUser?.token);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const fetched = await getUsers(tokenStorage);
      setUsers(fetched.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    
    console.log(Users.length);
    if (Users.length === 0) {
      getAllUsers();
    }
  }, [Users, tokenStorage]);

  useEffect(() => {
    if (!tokenStorage) {
      navigate("/");
    }
  }, [tokenStorage, navigate]);

  const deleteUsers = async (UserId) => {
    try {
      const fetched = await deleteUser(tokenStorage, UserId);

      /*if (!fetched.success) {
        setUsers(Users.filter((items) => items.id !== UserId));
      }*/
      getAllUsers();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Header />
      <Tipografia
        text="Panel de Administrador"
        fontSize="20px"
        color="white"
        fontFamily="Impact"
      />
      <div className="adminDesign">
        {Users.length > 0
          ? Users.map((User) => {
              return (
                <div className="userDesign">
                  <div>{User.first_name}</div>
                  <div>{User.last_name}</div>
                  <div>{User.email}</div>

                  <CButton
                    className={"CButtonDesign"}
                    title={`Delete ${User.first_name} `}
                    functionEmit={() => deleteUsers(User.id)}
                  />
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};
