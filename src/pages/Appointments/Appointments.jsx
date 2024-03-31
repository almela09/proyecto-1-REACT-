import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../../common/Header/Header"
import { GetAppointment } from "../../Services/ApiCalls"
import "./Appointments.css"
export const Appointments = ()=>{
    const navigate = useNavigate()
    const dataUser = JSON.parse(localStorage.getItem("passport"));
    const [tokenStorage, setTokenStorage] = useState(dataUser?.token);
    const [loadedData, setLoadedData] = useState(false);
    const [appointments, setAppointment] = useState([])

    useEffect(()=>{
        const getUserAppointment = async ()=> {
            try {
                const fetched = await GetAppointment(tokenStorage);
                const formatAppointment=fetched.data.map(appointment => ({
                    ...appointment,
                    id: appointment.id
                }));

                setAppointment(formatAppointment)
                    
            } catch (error) {
                console.log("Error al obtener citas:", error);
            }
        }
        if(!loadedData){
            getUserAppointment();
        }
    }, [tokenStorage, loadedData])
       
    return (
        
        <>
        <Header/>
        <div className= "appointmentDesign">
            <div className= "titleAppointDesign">Titulin citas</div>
        </div>

        </>
    )
}