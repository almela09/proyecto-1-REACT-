import { useEffect, useState } from "react";
import { Header } from "../../common/Header/Header";
import { getAppointments, createAppointments } from "../../Services/ApiCalls";
import {CInput} from "../../common/CInput/CInput"
import { CButton } from "../../common/CButton/CButton";
import dayjs from "dayjs";

import "./Appointments.css";

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

  useEffect(() => {
    if (appointments.length === 0) {
        const getDataAppointments = async () => {
            try {
              const fetched = await getAppointments(tokenStorage);
              setAppointments(fetched.data);
              console.log(fetched)
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
        dateAppointments: data.dateAppointments,
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
        <div className="cardTitleAppoint">Tu cita aqui</div>
        <div className="cardAppoint">

            <CInput
                className= {"inputAppointmentsDesign"}
                type={"date"}
                name={"dateAppointments"}
                value={setAppointmentsData.dateAppointments || ""}
                placeholder={"DD/MM/YYY"}
                functionChange={appointmentsInputHandler}
                disabled={""}
            
            />
             <CInput
                className= {"inputAppointmentsDesign"}
                type={"text"}
                name={"service_name"}
                value={appointmentsData.service_name || ""}
                placeholder={"service_name"}
                functionChange={appointmentsInputHandler}
                disabled={""}
            
            />
            <CButton 
                className={""}
                title={""}
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
