<template>
  <div>
    <div class="card">
      <div class="card-header"><strong>Lista de Usuarios</strong></div>

      <div class="card_body">
        <!-- <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button> -->
        <table class="table">

          <thead>
            <tr>
              <th style="font-weight: bold;display: none;">Id</th>
              <th style="font-weight: bold;">user</th>
              <th style="font-weight: bold;">password</th>
              <th style="font-weight: bold;">fechaRegistro</th>
              <th style="font-weight: bold;">Empleado</th>
              <th style="font-weight: bold;">Rol</th>
              <th style="font-weight: bold;">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in Usuarios" :key="usuario.pkUsuario">
              <td style="display: none;">{{ usuario.pkUsuario }}</td>
              <td>{{ usuario.user }}</td>
              <td>{{ usuario.password }}</td>
              <td>{{ usuario.fechaRegistro }}</td>
              <td>{{ usuario.empleado.nombre }}</td>
              <td>{{ usuario.rol.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  <button type="button" v-on:click="borrarUsuario(usuario.pkUsuario)" class="btn btn-outline-danger">
                    Eliminar</button>
                  <button type="button" v-on:click="editaregistro(usuario.pkUsuario)"
                    class="btn btn-outline-warning">Editar</button>

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

  components: {

  },
  data() {
    return {
      Usuarios: [],
      Empleado: [],
      smg: "",
      Enviar: 0
    };
  },
  created: function () {
    this.consultarUsuario();
  },
  // watch:{
  //   Enviar:function(){
  //     this.$root.$emit('send',this.Enviar)
  //   }
  // },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7051/Usuario/Multirelacion").then((result) => {
        
        this.Usuarios = result.data.result;

      });


    },

    borrarUsuario(id) {
      var pregunta = window.confirm('Esta se seguro de eliminar este registro?');

      if (pregunta === true) {
        axios.delete("https://localhost:7051/Usuario/" + id);
        window.location.href = "get";

      } else {

      }

    },
    editaregistro(id) {
      this.$router.push("/putUsuario/"+id)
    },
  },

};
</script>
