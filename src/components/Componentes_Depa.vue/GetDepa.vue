<template>
    <div>
      <div class="card">
        <div class="card-header"><strong>Lista de Departamentos</strong></div>
  
        <div class="card_body">
          <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button>
          <table class="table">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">Nombre</th>  
                <th style="font-weight: bold;">Acciones</th>       
              </tr>
            </thead>
            <tbody>
              <tr v-for="depa in Departamentos" :key="depa.pkDepartamento">
                <td>{{ depa.pkDepartamento }}</td>
                <td>{{ depa.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="borrarCliente(depa.pkDepartamento)" class="btn btn-outline-danger">
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
  name:'getdepa',
    components:{
  
    },
    data() {
      return {
        Departamentos: [],
        Empleado: [],
        nombresempleados: [{}],
        smg: "",
      };
    },
    created: function () {
      this.consultarcliente();
    },
    methods: {
      consultarcliente() {
        axios.get("https://localhost:7051/Departamento").then((result) => {
          console.log(result.data);
          this.Departamentos = result.data.result;
  
          // console.log(this.clientes[1].fkEmpleado);
  
  
  
        //   for (let i = 0; i < this.clientes.length; i++) {
        //     this.Empleado.push(this.clientes[i].fkEmpleado);
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
  
      borrarCliente(id) {
        var pregunta=window.confirm('Esta se seguro de eliminar este registro?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7051/Departamento/" + id);
          window.location.href = "getdepa";
          
        }else{
          
        }  
  
      },
      editaregistro() {
      window.location.href="/putdepa";
  
      
  
      },
    },
  
  };
  </script>