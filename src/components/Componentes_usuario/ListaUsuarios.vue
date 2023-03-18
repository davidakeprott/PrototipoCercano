<template>
    <div>
      <div class="card">
        <div class="card-header">Usuarios</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>user</th>
                <th>password</th>
                <th>fechaRegistro</th>
                <th>FkEmpleado</th>
                <th>FkRol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in Usuarios" :key="usuario.id">
                <td>{{ usuario.user }}</td>
                <td>{{ usuario.password }}</td>
                <td>{{ usuario.fechaRegistro }}</td>
                <td>{{ usuario.FkEmpleado }}</td>
                <td>{{ usuario.FkRol }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarArticulo(usuario.id)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Usuarios: [],
    };
  },
  created: function () {
    this.consultarArticulos();
  },
  methods: {
    consultarArticulos() {
      axios.get("https://localhost:7051/Usuario").then((result) => {
        console.log(result.data);
        this.Usuarios = result.data;
      });
    },

    borrarArticulo(id) {
      console.log(id);

      axios.delete("https://localhost:7053/articulos/borrar/" + id);

      window.location.href = "dashboard";
    },
  },
};
</script>