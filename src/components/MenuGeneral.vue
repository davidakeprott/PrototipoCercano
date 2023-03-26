<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div>
        <div class="row">
            <div class="col"></div>
            <div class="col">

                <div class="dropdown">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Menu de Opciones
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="btn btn-outline-secondary dropdown-item"
                                v-on:click="AbrirDashUsuario()">Dashboard Usuarios</button></li>

                        <li><button class="btn btn-outline-secondary dropdown-item"
                                v-on:click="AbrirDashCliente()">Dashboard Cliente</button></li>

                        <li><button class="btn btn-outline-secondary dropdown-item" v-on:click="AbrirDashDepa()">Dashboard
                                Departamentos</button></li>

                        <li><button class="btn btn-outline-secondary dropdown-item"
                                v-on:click="AbrirDashEmpleado()">Dashboard
                                Empleados</button></li>

                        <li><button class="btn btn-outline-secondary dropdown-item"
                                v-on:click="AbrirDashFacturas()">Dashboard
                                Facturas</button></li>
                        <li><button class="btn btn-outline-secondary dropdown-item" v-on:click="AbrirDashPuesto()">Dashboard
                                Puesto</button></li>
                        <li><button class="btn btn-outline-secondary dropdown-item" v-on:click="AbrirDashRol()">Dashboard
                                Rol</button></li>
                    </ul>



                    
                </div>
                <div class="col"></div>
            </div>
        </div>
        <br>
        <div class="row">
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'menugeneral',
    components: {

    },
    data() {
        return {
            ver: true
        }
    },
    methods: {
        AbrirDashUsuario() {
            window.location.href = "/get";
        },
        AbrirDashCliente() {
            window.location.href = "/getcliente";
        },
        AbrirDashDepa() {
            window.location.href = "/getdepa";
        },
        AbrirDashEmpleado() {
            window.location.href = "/getempleado"
        },
        AbrirDashFacturas() {
            window.location.href = "/getfactura"
        },
        AbrirDashPuesto() {
            window.location.href = "/getpuesto"
        },
        AbrirDashRol() {
            window.location.href = "/getrol"
        }
    }
}

</script>