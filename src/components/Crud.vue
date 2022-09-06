<template>
  <input v-model="id" type="text" />
  <input v-model="nombre" type="text" />
  <button @click="buscar">Consultar</button>
  <button @click="insertar">Insertar</button>
  <button @click="actualizar">Actualizar</button>
  <button @click="eliminar">Eliminar</button>
</template>

<script>
import {
  obtenerEmpleado,
  eliminarEmpleado,
  insertarEmpleado,
  actualizarEmpleado,
} from "@/helpers/procesarEmpleado.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
    };
  },
  methods: {
    async buscar() {
      const response = await obtenerEmpleado(this.id);
      console.log(response)
    },
    async eliminar() {
        const response = await eliminarEmpleado(this.id);
        console.log(response)
    },
    async insertar() {
      const empl = {
        id: this.id,
        nombre: this.nombre,
        apellido: "Paredes",
        fechaNacimiento: "2010-06-17T00:00:00",
        salario: 200,
      };
      const response = await insertarEmpleado(empl);
      console.log(response)
    },
    async actualizar() {
      const empl = {
        id: this.id,
        nombre: this.nombre,
        apellido: "Paredes",
        fechaNacimiento: "2010-06-17T00:00:00",
        salario: 200,
      };
      const response = await actualizarEmpleado(empl);
      console.log(response)
    },
  },
};
</script>

<style>
</style>