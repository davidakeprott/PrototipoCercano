<template>
    <div>
      <div class="card">
        <div class="card-header"><strong>Lista de Clientes</strong></div>
  
        <div class="card_body">
          <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button>
          <table class="table">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">Nombre</th>
                <th style="font-weight: bold;">Apellido</th>
                <th style="font-weight: bold;">Telefono</th>
                <th style="font-weight: bold;">Email</th>
                <th style="font-weight: bold;">Direccion</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente in Clientes" :key="cliente.pkCliente">
                <td>{{ cliente.pkCliente }}</td>
                <td>{{ cliente.nombre }}</td>
                <td>{{ cliente.apellidos }}</td>
                <td>{{ cliente.telefono }}</td>
                <td>{{ cliente.email }}</td>
                <td>{{ cliente.direccion }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="borrarCliente(cliente.pkCliente)" class="btn btn-outline-danger">
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
  name:'getcliente',
    components:{
  
    },
    data() {
      return {
        Clientes: [],
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
        axios.get("https://localhost:7051/Cliente").then((result) => {
          console.log(result.data);
          this.Clientes = result.data.result;
  
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
          axios.delete("https://localhost:7051/Cliente?id=" + id);
          window.location.href = "getcliente";
          
        }else{
          
        }  
  
      },
      editaregistro() {
      window.location.href="/putcliente";
  
      
  
      },
    },
  
  };
  </script>