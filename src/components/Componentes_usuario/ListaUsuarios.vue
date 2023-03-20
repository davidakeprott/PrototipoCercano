<template>
  <div>
    <div class="card">
      <div class="card-header"><strong>Lista de Usuarios</strong></div>

      <div class="card_body">
        <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button>
        <table class="table">
          
          <thead>
            <tr>
              <th style="font-weight: bold;">Id</th>
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
              <td>{{ usuario.pkUsuario }}</td>
              <td>{{ usuario.user }}</td>
              <td>{{ usuario.password }}</td>
              <td>{{ usuario.fechaRegistro }}</td>
              <td>{{ usuario.empleado.nombre }}</td>
              <td>{{ usuario.rol.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  <button type="button" v-on:click="borrarArticulo(usuario.pkUsuario)" class="btn btn-outline-danger">
                    Eliminar</button>          
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

  components:{

  },
  data() {
    return {
      Usuarios: [],
      Empleado: [],
      nombresempleados: [{}],
      smg: "",
    };
  },
  created: function () {
    this.consultarUsuario();
  },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7051/Usuario/Multirelacion").then((result) => {
        console.log(result.data);
        this.Usuarios = result.data.result;

        // console.log(this.Usuarios[1].fkEmpleado);



      //   for (let i = 0; i < this.Usuarios.length; i++) {
      //     this.Empleado.push(this.Usuarios[i].fkEmpleado);
      //   }

      //   if (this.Empleado.length != 0) {
      //     for (let i = 0; i < this.Empleado.length; i++) {
      //       axios.get("https://localhost:7051/Empleado?id=" + this.Empleado[i]).then((result) => {
      //         this.nombresempleados = result.data.result;
      //         console.log(result.data.result.apellidos);
      //       });
      //     }
      //   }
      //   else {
      //     console.log("Array empleados no lleno");
      //   }


       });


    },

    borrarArticulo(id) {
      var pregunta=window.confirm('Esta se seguro de eliminar este registro?');

      if(pregunta===true){
        axios.delete("https://localhost:7051/Usuario/" + id);
        window.location.href = "get";
        
      }else{
        
      }  

    },
    editaregistro() {
    window.location.href="/putUsuario";

    

    },
  },

};
</script>
