<template>
    <div>
      <div class="card">
        <div class="card-header"><strong>Lista de Roles</strong></div>
  
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
              <tr v-for="puesto in Roles" :key="puesto.pkRol">
                <td>{{ puesto.pkRol }}</td>
                <td>{{ puesto.nombre }}</td>
              
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="borrarpuesto(puesto.pkRol)" class="btn btn-outline-danger">
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
  name:'getrol',
    components:{
  
    },
    data() {
      return {
        Roles: [],
        smg: "",
      };
    },
    created: function () {
      this.consultarpuesto();
    },
    methods: {
      consultarpuesto() {
        axios.get('https://localhost:7051/Rol').then((result) => {
          console.log(result.data);
          this.Roles = result.data.result;
  
         });
  
  
      },
  
      borrarpuesto(id) {
        var pregunta=window.confirm('Esta se seguro de eliminar este registro?');
  
        if(pregunta===true){
          axios.delete('https://localhost:7051/Rol?id=' + id);
          window.location.href = "getrol";
          
        }else{
          
        }  
  
      },
      editaregistro() {
      window.location.href="/putrol";
  
      
  
      },
    },
  
  };
  </script>