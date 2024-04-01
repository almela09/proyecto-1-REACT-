import "./Admin.css"
import { CButton } from "../../common/CButton/CButton"
import { useNavigate } from "react-router-dom";

export const Admin = ()=> {
    const dataUser = JSON.parse(localStorage.getItem("passport"));
    const [Users, setUsers] = useState([])
    const [tokenStorage, setTokenStorage] = useState(dataUser?.token);
    const navigate = useNavigate()

    const getAllUsers = async ()=>{
        try {
            
        } catch (error) {
            
        }


    }


}