<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Usuario</div>
            <div class="card-body">
                <form v-on:submit.prevent="editarUser">
                    <div class="form-group">
                        <label for="user" style="color: black;">Usuario:</label>
                        <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                            placeholder="nombre" v-model="form.user" />


                        <label for="password" style="color: black;">Password:</label>
                        <input type="text" class="form-control" name="password" aria-describedby="helpId" id="password"
                            placeholder="apellidos" v-model="form.password" />


                        <div class="form-group">
                            <label for="empleado">Selecciona el empleado:</label>
                            <select class="form-select" aria-label="Default select example" name="empleado" id="empleado"
                                v-model="form.fkEmpleado">
                                <option v-for="empleado in Empleado" :value="empleado.pkEmpleado"
                                    :key="empleado.pkEmpleado">{{ empleado.nombre }}</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="rol">Selecciona el rol:</label>
                            <select class="form-select" aria-label="Default select example" name="rol" id="rol"
                                v-model="form.fkRol">
                                <option v-for="rol in Rol" :value="rol.pkRol" :key="rol.pkRol">{{ rol.nombre }}</option>

                            </select>
                        </div>





                    </div><br />

                    <div class="btn-group" role="group">
                        <button type="submit" class="btn btn-outline-primary">Guardar</button>
                        <router-link :to="{ name: 'get' }" class="btn btn-outline-danger">Cancelar</router-link>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'editar',
  components: {
  },
  data: function() {
      return {
          pkUsuario: null,
      form:{
        pkUsuario:"",
        user:"",
        password:"",
        fechaRegistro:"",
        fkEmpleado:"",
        fkRol :""
      },
      Empleado:{},
      Rol:{}
          
          
      }
  },
  created: function () {
        this.consultarEmpleado();
        this.consultarRol();    
      },
  mounted : function(){
    const Fecha = this.form.fechaRegistro
      this.pkUsuario = this.$route.params.pkUsuario;
      
      axios.get("https://localhost:7051/Usuario?id=" + this.pkUsuario).then(respuesta =>
      {
          this.form.pkUsuario = respuesta.data.result[0].pkUsuario;
          this.form.user = respuesta.data.result[0].user;
          this.form.password = respuesta.data.result[0].password;
          this.form.fechaRegistro = respuesta.data.result[0].fechaRegistro;
          this.form.fkEmpleado = respuesta.data.result[0].fkEmpleado;
          this.form.fkRol = respuesta.data.result[0].fkRol;
          
        
      });
  },
  methods:{
      editarUser()
      {
          axios.put("https://localhost:7051/Usuario?id=" + this.pkUsuario, this.form).then(data =>{
          });
          window.location.href="/get";
      },
      consultarEmpleado() {
             axios.get("https://localhost:7051/Empleado").then((result) => {
               this.Empleado = result.data.result;
            });
              
        },
              consultarRol() {
                axios.get("https://localhost:7051/Rol").then((result) => {
                  this.Rol = result.data.result;
                });
                
            }
  
      
  },
 
}
  
 
          
      
  
</script>