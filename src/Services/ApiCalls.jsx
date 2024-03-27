const root ="http://localhost:4000/api/" //va el link del endpoint

export const loginMe =async(credenciales)=>{
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credenciales),
      };
   
    const response = await fetch(
        `${root}auth/login`, options
    )
    const data = await response.json()
    return data;
}