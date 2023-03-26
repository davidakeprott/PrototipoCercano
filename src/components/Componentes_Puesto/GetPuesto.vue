<template>
    <div>
      <div class="card">
        <div class="card-header"><strong>Lista de Puestos</strong></div>
  
        <div class="card_body">
          <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button>
          <table class="table">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">nombre</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="puesto in Puestos" :key="puesto.pkpuesto">
                <td>{{ puesto.pkpuesto }}</td>
                <td>{{ puesto.nombre }}</td>
              
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="borrarpuesto(puesto.pkpuesto)" class="btn btn-outline-danger">
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
  name:'getpuesto',
    components:{
  
    },
    data() {
      return {
        Puestos: [],
        smg: "",
      };
    },
    created: function () {
      this.consultarpuesto();
    },
    methods: {
      consultarpuesto() {
        axios.get('https://localhost:7051/Puesto').then((result) => {
          console.log(result.data);
          this.Puestos = result.data.result;
  
         });
  
  
      },
  
      borrarpuesto(id) {
        var pregunta=window.confirm('Esta se seguro de eliminar este registro?');
  
        if(pregunta===true){
          axios.delete('https://localhost:7051/Puesto?id=' + id);
          window.location.href = "getpuesto";
          
        }else{
          
        }  
  
      },
      editaregistro() {
      window.location.href="/putpuesto";
  
      
  
      },
    },
  
  };
  </script>