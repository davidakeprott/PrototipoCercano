<template>
    <div>
      <div class="card">
        <div class="card-header"><strong>Lista de Facturas</strong></div>
  
        <div class="card_body">
          <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button>
          <table class="table">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">razonsocial</th>
                <th style="font-weight: bold;">fecha</th>
                <th style="font-weight: bold;">rfc</th>
                <th style="font-weight: bold;">fkCliente</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fac in Facturas" :key="fac.pkFactura">
                <td>{{ fac.pkFactura }}</td>
                <td>{{ fac.razonSocial }}</td>
                <td>{{ fac.fecha }}</td>
                <td>{{ fac.rfc }}</td>
                <td>{{ fac.fkCliente }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="borrarfac(fac.pkFactura)" class="btn btn-outline-danger">
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
  name:'getfac',
    components:{
  
    },
    data() {
      return {
        Facturas: [],
        smg: "",
      };
    },
    created: function () {
      this.consultarfac();
    },
    methods: {
      consultarfac() {
        axios.get('https://localhost:7051/Factura').then((result) => {
          console.log(result.data);
          this.Facturas = result.data.result;
  
         });
  
  
      },
  
      borrarfac(id) {
        var pregunta=window.confirm('Esta se seguro de eliminar este registro?');
  
        if(pregunta===true){
          axios.delete('https://localhost:7051/Factura?id=' + id);
          window.location.href = "getfactura";
          
        }else{
          
        }  
  
      },
      editaregistro() {
      window.location.href="/putfactura";
  
      
  
      },
    },
  
  };
  </script>