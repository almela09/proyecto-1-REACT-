const root = "http://localhost:4000/api/"; //va el link del endpoint

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
export const GetProfile = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(`${root}users/profile`, options);

    const data = await response.json();

    /*if (!data.success) {
      throw new Error(data.message);
    }*/

    return data;
  } catch (error) {
    return error;
  }
};

export const UpdateProfile = async (token, data) => { 
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(`${root}users/profile`, options);

    const data = await response.json();

    /*if (!data.success) {
      throw new Error(data.message);
    }*/

    return data;
  } catch (error) {
    return error;
  }
};

export const getServices = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`${root}services`, options);
    const data = await response.json();

    /*if (!data.success) {
      throw new Error(data.message || "Error al obtener los servicios");
    }*/

    return data;
  } catch (error) {
    console.error("Error al cargar los servicios:", error);
    return [];
  }
};

export const getAppointments = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  };
  try {
    const response = await fetch(`${root}myappointments`, options);
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const createAppointments = async (token, appointmentsData) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(appointmentsData),
  };
  try {
    const response = await fetch(`${root}appointments`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const getUsers = async(token)=>{
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }

  try {
    const response = await fetch(`${root}users`, options)

    const data = await response.json()

    /*if (!data.success) {
      throw new Error(data.message)
    }*/

    return data
  } catch (error) {
    return error
    
  }

}

export const deleteUser = async (token, UserId) =>{

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    // body: JSON.stringify(data)
  }

  try {
    const response = await fetch(`${root}users/${UserId}`, options)

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.message)
    }

    return data

  } catch (error) {
    return error
  }



}


 