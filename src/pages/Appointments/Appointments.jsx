import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import { getAppointments, createAppointments } from "../../Services/ApiCalls";
import {CInput} from "../../common/CInput/CInput"
import { CButton } from "../../common/CButton/CButton";
import { getServices } from "../../Services/ApiCalls";


import "./Appointments.css";


                  const fetched = await getServices()
                  const servicios = fetched.data;  
                  console.log(servicios)




export const Appointments = () => {
  const dataUser = JSON.parse(localStorage.getItem("passport"));
  const [appointments, setAppointments] = useState([]);
  const [tokenStorage, setTokenStorage] = useState(dataUser?.token);

 
  const [appointmentsData, setAppointmentsData] = useState({
    dateAppointments: "",
    service_name: "",
  });

  const appointmentsInputHandler= (e) => {
    setAppointmentsData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };




  const sacaCita = async () => { //aqui tienes que poner el codigo de sacar cita
    try {
      for (let elemento in credenciales) {
        if (credenciales[elemento] === "") {
          throw new Error("Todos los campos tienen que estar rellenos");
        }
      }

      const fetched = await createAppointments(credenciales); //aqui en vez de loginuser, llamas a sacar la cita, que estará....
    

      const decodificado = decodeToken(fetched.token);

      const passport = {
        token: fetched.token,
        decodificado: decodificado,
      };

      localStorage.setItem("passport", JSON.stringify(passport));

      setMsgError(
        `Hola ${decodificado.name}, bienvenido de nuevo al HORROR MAXIMO`
      );

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setMsgError(error.message);
    }
  };





  useEffect(() => {
    if (appointments.length === 0) {
        const getDataAppointments = async () => {
            try {
              const fetched = await getAppointments(tokenStorage);
              setAppointments(fetched.data);
              //console.log(fetched)
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
        <div className="cardTitleAppoint">Pídenos Cita</div>
        <div className="cardAppoint">

            <CInput
                className= {"inputAppointmentsDesign"}
                type={"text"}
                name={"dateAppointments"}
                value={setAppointmentsData.dateAppointments || "01/04/2024"}
                placeholder={"DD/MM/YYY"}
                //functionChange={appointmentsInputHandler}
                disabled={""}
            
            />

        <select className="inputAppointmentsDesign">
            {servicios.map((servicio, index) => (
                <option key={index} value={servicio.id}>
                    {servicio.serviceName || "Servicio no disponible"}
                </option>
            ))}
        </select>


            <CButton 
                className={"cButtonDesign"}
                title={"Pillar cita ahí"}
                functionEmit={""}
            />
        </div>
        <div className= "cardTitleAppoint">Citas</div>  {
                      
                        <div> {
                        appointments.map(appointment => {
                            const formatDate = dayjs(appointment.dateAppointment).format('DD/MM/YYYY');
                            return (
                                <div key={appointment.id} className='cardAppointmentsDesign'>
                                    <div className='cardAppointments'>
                                        <div>{appointment.service.service_name}</div>
                                        <div>{formatDate}</div>
                                        <div>borrar cita </div>
                                    </div>
                                </div>
                            )
                        })} </div>
                        
                }
            </div>

        </>

    )
}
        {/* {
            (appointments.length > 0) ?
            appointments.map(appointment => {
                const Date = dayjs(appointment.dateAppointments).format('DD/MM/YYY')
            }
        }
      </div>
    </>
  );
}; */}
