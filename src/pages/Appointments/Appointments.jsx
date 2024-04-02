import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import { getAppointments, createAppointments } from "../../Services/ApiCalls";
import { CInput } from "../../common/CInput/CInput";
import { CButton } from "../../common/CButton/CButton";
import { getServices } from "../../Services/ApiCalls";
import { Tipografia } from "../../common/Tipografia/Tipografia";

import "./Appointments.css";

const fetched = await getServices(); 
const servicios = fetched.data;

export const Appointments = () => {
  const dataUser = JSON.parse(localStorage.getItem("passport"));
  const [appointments, setAppointments] = useState([]);
  const [tokenStorage, setTokenStorage] = useState(dataUser?.token);

  const [appointmentsData, setAppointmentsData] = useState({
    dateAppointments: "",
    service_name: "",
  });

  const appointmentsInputHandler = (e) => {
    console.log("a");
    setAppointmentsData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.value);
  };

  const handleCreateAppointments = async () => {
    try {
      
      let a = {
        serviceId: appointmentsData.serviceId,
        appointmentDate: appointmentsData.appointmentDate,
      };
      console.log(a);
      await createAppointments(tokenStorage, a);
      // Procesa la respuesta como sea necesario
    } catch (error) {
      console.error("Error al crear la cita:", error);
    }
  };

  useEffect(() => {
    if (appointments.length === 0) {
      const getDataAppointments = async () => {
        try {
          const fetched = await getAppointments(tokenStorage);
          setAppointments(fetched.data);
        } catch (error) {
          console.log(error);
        }
      };
      getDataAppointments();
    }
  }, [appointments]);

  const newAppointments = async () => {
    try {
      const petition = await createAppointments(tokenStorage, appointmentsData);
      const data = response.data;
      setAppointmentsData({
        // dateAppointments: data.dateAppointments,
        service_name: data.service,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className="appointmentsDesign">
        <div className="cardTitleAppoint">
          <Tipografia
            text="Pídenos Cita"
            fontSize="30px"
            color="blue"
            fontFamily="Impact"
          />
        </div>
        <div className="cardAppoint">
          <CInput
            className="inputAppointmentsDesign"
            type="text"
            name="appointmentDate" // Cambiar para reflejar su propósito y coincidir con la estructura del estado
            placeholder="DD/MM/YYY"
            onChangeFunction={appointmentsInputHandler} // Usa onChange para actualizar el estado
            disabled=""
            value={appointmentsData.appointmentDate}
          />

          <select
            className="inputAppointmentsDesign"
            name="serviceId" // Asegúrate de que el nombre coincida con el estado
            value={appointmentsData.serviceId} // Agrega un valor controlado para el select
            onChange={appointmentsInputHandler} // Usa onChange para actualizar el estado
          >
            <option key="0" value="0">
              Select one
            </option>
            {servicios.map((servicio, index) => (
              <option key={index} value={servicio.id}>
                {servicio.serviceName || "Servicio no disponible"}
              </option>
            ))}
          </select>

          <CButton
            className={"cButtonDesign"}
            title={"Reservar cita"}
            functionEmit={handleCreateAppointments}
          />
        </div>
        <div className="cardTitleAppoint"></div>{" "}
        {
          <div>
            {" "}
            {appointments.map((appointment) => {
              console.log(appointment);
              const date = new Date(appointment.appointmentDate);
              // Obtener el día, mes y año
              const day = date.getDate().toString().padStart(2, "0"); // Asegurar 2 dígitos
              const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Los meses empiezan en 0, así que sumar 1
              const year = date.getFullYear();
              // Formatear la fecha como dd/mm/aaaa
              const formattedDate = `${day}/${month}/${year}`;
              return (
                <div key={appointment.id} className="cardAppointmentsDesign">
                  <div className="cardAppointments">
                    <div>{appointment.service.serviceName}</div>
                    <div>{formattedDate}</div>
                    <div>Borrar cita</div> 
                  </div>
                </div>
              );
            })}{" "}
          </div>
        }
      </div>
    </>
  );
};
