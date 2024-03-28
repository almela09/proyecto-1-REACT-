const root ="http://localhost:4000/api/" //va el link del endpoint

// export const loginMe =async(credenciales)=>{
//     const options = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(credenciales),
//       };
   
//     const response = await fetch(
//         `${root}auth/login`, options
//     )
//     const data = await response.json()
//     return data;
// }
export const RegisterUser = async (user) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${root}auth/register`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};
export const LoginUser = async (credenciales) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credenciales),
  };

  try {
    const response = await fetch(`${root}auth/login`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

