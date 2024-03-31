import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServices } from "../../Services/ApiCalls";
import { Header } from "../../common/Header/Header"
import "./Servicios.css"
import { Card } from "../../common/Card/Card";

export const Servicios = () => {
    const [servicios, setServicios] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

      if (servicios.length === 0) {
          const ServiciosTatto = async () => {
              try {
                  const fetched = await getServices()
                  setServicios(fetched.data);
                  console.log(getServices)
                  console.log(fetched)

              } catch (error) {
                  console.log(error)

              }
          }
          ServiciosTatto()
      }

  }, [servicios])

    // useEffect(() => {
    //   getServices()
    //   console.log(servicios)
    //     .then(setServicios)
    //     .catch((error) => console.error("Error al cargar los servicios:", error));
    // }, []);
  
    // const handleServiceClick = (id) => {
    //   navigate(`/servicios/${id}`);
    // };
  
    return (
      <>
        <Header />
      
        <div className="servicesDesign">
    
          {servicios.length > 0 
          ?(servicios.map((servicio) => {
            
          return (
            <div className="cardDesignServices">
              <div key={servicio.id} className="itemServices" onClick={() => handleServiceClick(servicio.id)}>
              <h2 className="titleServicesDesign">{servicio.service_name}</h2>
              <p className="descriptionServicesDesign">{servicio.description}</p>
            </div>
            </div>
          )

          }
          ))
        :("")} 
        
        </div>
        
      </>
    );
  };
  
  


