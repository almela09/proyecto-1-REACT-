import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../../common/Header/Header"
import { getAppointments } from "../../Services/ApiCalls"
import dayjs from 'dayjs';
import "./Appointments.css"

// export const Appointments = ()=>{
//     const navigate = useNavigate()
//     const dataUser = JSON.parse(localStorage.getItem("passport"));
//     const [tokenStorage, setTokenStorage] = useState(dataUser?.token);
//     const [loadedData, setLoadedData] = useState(false);
//     const [appointments, setAppointment] = useState([])

//     useEffect(()=>{
//         const getUserAppointment = async ()=> {
//             try {
//                 const fetched = await GetAppointment(tokenStorage);
//                 const formatAppointment=fetched.data.map(appointment => ({
//                     ...appointment,
//                     id: appointment.id
//                 }));

//                 setAppointment(formatAppointment)
                    
//             } catch (error) {
//                 console.log("Error al obtener citas:", error);
//             }
//         }
//         if(!loadedData){
//             getUserAppointment();
//         }
//     }, [tokenStorage, loadedData])
       
//     return (
        
//         <>
//         <Header/>
//         <div className= "appointmentDesign">
//             <div className= "titleAppointDesign">Titulin citas</div>
//         </div>

//         </>
//     )
// }

export const Appointments = ()=>{
    const dataUser = JSON.parse(localStorage.getItem("passport"));
    const [tokenStorage, setTokenStorage] = useState(dataUser?.token)
    const [loadedData, setLoadedData] = useState(false);
    const [servicios, setServicios] = useState([]);

    const [appointments, setAppointments] = useState([])
    const [appointmentsData, setAppointmentsData] = useState({
        service_name: "",
        appointmentsDate: "",

    });
   
    const inputHandlerAppointments = (e) => {

        setAppointmentsData(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            })
        )
    };

    useEffect(()=>{

        const getDataAppointments = async ()=>{
            try {
              const fetched = await getAppointments(tokenStorage)  
              setAppointments(fetched.data)
            } catch (error) {
                console.log(error)
            }
        }
        getDataAppointments()
    },[])

    return (
        <>
        <Header />
        </>
    )
}