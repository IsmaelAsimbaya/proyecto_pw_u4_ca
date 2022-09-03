
const obtenerEmpleado = async (id) => {
    return await obtenerEmpleadoAPI(id);
}

const obtenerEmpleadoAPI = async (id) => {
    const data = await fetch(`http://localhost:8085/API/Nomina/V1/empleados/${id}`).then(r => r.json())
    console.log(data)
    return data
}

export default obtenerEmpleado