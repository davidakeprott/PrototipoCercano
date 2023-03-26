<template>
    <div>
      <div class="card">
        <div class="card-header"><strong>Lista de Empleados</strong></div>
  
        <div class="card_body">
          <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button>
          <table class="table">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">Nombre</th>
                <th style="font-weight: bold;">Apellido</th>
                <th style="font-weight: bold;">Direccion</th>
                <th style="font-weight: bold;">Ciudad</th>
                <th style="font-weight: bold;">fkPuesto</th>
                <th style="font-weight: bold;">fkDepartamento</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="emple in Empleados" :key="emple.pkEmpleado">
                <td>{{ emple.pkEmpleado }}</td>
                <td>{{ emple.nombre }}</td>
                <td>{{ emple.apellidos }}</td>
                <td>{{ emple.dirreccion }}</td>
                <td>{{ emple.ciudad }}</td>
                <td>{{ emple.fkPuesto }}</td>
                <td>{{ emple.fkDepartamento }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="borraremple(emple.pkEmpleado)" class="btn btn-outline-danger">
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
  name:'getemple',
    components:{
  
    },
    data() {
      return {
        Empleados: [],
        smg: "",
      };
    },
    created: function () {
      this.consultaremple();
    },
    methods: {
      consultaremple() {
        axios.get("https://localhost:7051/Empleado").then((result) => {
          console.log(result.data);
          this.Empleados = result.data.result;
  
          // console.log(this.emples[1].fkEmpleado);
  
  
  
        //   for (let i = 0; i < this.emples.length; i++) {
        //     this.Empleado.push(this.emples[i].fkEmpleado);
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
  
      borraremple(id) {
        var pregunta=window.confirm('Esta se seguro de eliminar este registro?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7051/Empleado?id=" + id);
          window.location.href = "getempleado";
          
        }else{
          
        }  
  
      },
      editaregistro() {
      window.location.href="/putempleado";
  
      
  
      },
    },
  
  };
  </script>