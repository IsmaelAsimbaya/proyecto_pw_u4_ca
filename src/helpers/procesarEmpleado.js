import axios from 'axios'

//Metodos Fachada a exportar
export const obtenerEmpleado = async (id) => {
    //return await obtenerEmpleadoAPI(id);
    return await getEmpleadoAXIOS(id);
}

export const insertarEmpleado = async (body) => {
    return await postEmpleadoAXIOS(body);
}

export const actualizarEmpleado = async (body) => {
    return await putEmpleadoAXIOS(body);
}

export const eliminarEmpleado = async (id) => {
    return await deleteEmpleadoAXIOS(id);
}

//Metodos de consumo de la API
const obtenerEmpleadoAPI = async (id) => {
    const data = await fetch(`http://localhost:8085/API/Nomina/V1/empleados/${id}`).then(r => r.json())
    console.log(data)
    return data
}

//GET
const getEmpleadoAXIOS = async (id) => {
    const data = axios.get(`http://localhost:8085/API/Nomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}

//POST
const postEmpleadoAXIOS = async (body1) => {
    //Cabeceras
    const data = axios.post(`http://localhost:8085/API/Nomina/V1/empleados`, body1).then(r => r.data)
    console.log(data)
    return data
}

//PUT
const putEmpleadoAXIOS = async (body) => {
    const data = axios.put(`http://localhost:8085/API/Nomina/V1/empleados`, body).then(r => r.data)
    console.log(data)
    return data
}

//DELETE
const deleteEmpleadoAXIOS = async (id) => {
    const data = axios.delete(`http://localhost:8085/API/Nomina/V1/empleados/${id}`).then(r => r.data)
    console.log(data)
    return data
}

//export default obtenerEmpleado;eliminarEmpleado;insertarEmpleado;actualizarEmpleado;
