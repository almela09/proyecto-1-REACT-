import "./CSelect.css"

export const CSelect = ({className, name, value, functionChange}) => {

    return (
       <input
        className= {className}
        name= {name}
        value={value}
        functionChange={functionChange}

       />
    )
}


// className="inputAppointmentsDesign"
// name="service_id"
// value={selectedService}
// functionChange={handleServiceChange}
// options=