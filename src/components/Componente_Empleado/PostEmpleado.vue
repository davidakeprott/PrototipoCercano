<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar Empleado</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-contdepa" name="nombre" aria-describedby="helpId" id="nombre"
                                    placeholder="usuario" v-model="Empleados.nombre" />
                                <small id="helpId" class="form-text" text-muted>Ingresa los nombres</small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="apellidos">Apellidos:</label>
                                <input type="text" class="form-contdepa" name="apellidos" id="apellidos"
                                    aria-describedby="helpId" placeholder="apellidos" v-model="Empleados.apellidos" />
                                <small id="helpId" class="form-text" text-muted>Ingresa los apellidos</small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="direccion">Direccion:</label>
                                <input type="text" class="form-contdepa" name="direccion" id="direccion"
                                    aria-describedby="helpId" placeholder="direccion" v-model="Empleados.direccion" />
                                <small id="helpId" class="form-text" text-muted>Ingresa una direccion</small>
                            </div>
                        </div>

                        <div class="col">
                            <div class="form-group">
                                <label for="ciudad">Ciudad:</label>
                                <input type="text" class="form-contdepa" name="ciudad" id="ciudad"
                                    aria-describedby="helpId" placeholder="ciudad" v-model="Empleados.ciudad" />
                                <small id="helpId" class="form-text" text-muted>Ingresa una ciudad</small>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="col">
                            <input type="number" name="fkpado" id="fkpado" value="" style="display: none;" />

                            <!-- <div class="form-group">
                                <label for="fkpado">fkpado:</label>
                                <input type="number" class="form-contdepa" name="fkpado" id="fkpado"
                                    aria-describedby="helpId" placeholder="fkpado" v-model="Empleados.fkpado" />
                            </div> -->
                            <label for="">Puesto:</label>
                            <select class="form-select" aria-label="Default select example" v-model="nombrepuesto"  v-on:change="convertirPuesto()">
                                <!-- <option selected></option> -->
                                <option disabled selected>Seleccionar Puesto</option>
                                <option v-for="p in Puestos" :key="p.pkPuesto">{{ p.nombre }}</option>

                            </select>
                        </div>
                        <div class="col">

                            <input type="number" name="fkdepa" id="fkdepa" value="" style="display: none;" />


                            <label for="">Departamento:</label>
                            <select class="form-select" aria-label="Default select example" v-model="Nombredepa" v-on:change="convertidordepa()">
                                <!-- <option selected></option> -->
                                <option disabled selected>Seleccionar departamento</option>
                                <option v-for="depa in Departamentos" :key="depa.pkdepa">{{ depa.nombre }}</option>

                            </select>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" depae="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'get' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'getempleado' }" class="btn btn-outline-primary" id="finaliza"
                            style="display: none;">Finalizar</router-link>
                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" depae="alert">
                            {{ smg }}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: "postpado",
    components: {

    },

    data() {
        return {
            Empleados: {},
            smg: "",
            Puestos: {},
            Departamentos: {},
            Nombredepa: '',
            nombrepuesto: '',
            registrodepa: [],
            registroPuesto: [],

        };
    },
    created: function () {
        this.CargarPuestos_Y_depa();
    },
    methods: {
        formulario() {
        
            var cuerpo = {
                nombre: this.Empleados.nombre,
                apellidos: this.Empleados.apellidos,
                dirreccion: this.Empleados.direccion,
                ciudad: this.Empleados.ciudad,
                fkPuesto: document.getElementById('fkpado').value,
                fkDepartamento: document.getElementById('fkdepa').value
            }

            console.log(cuerpo)




            axios.post('https://localhost:7051/Empleado', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display = "none";
                    this.smg = "agregado exitosamente :D/";
                    document.getElementById('finaliza').style.display = "block";
                    console.log(result);
                }

            })
        


        },
        CargarPuestos_Y_depa() {
            axios.get('https://localhost:7051/Puesto').then((response) => {
                this.Puestos = response.data.result;

            })

            axios.get('https://localhost:7051/Departamento').then((response) => {
                this.Departamentos = response.data.result;
            })

        },
         convertidordepa() {
           
             axios.get('https://localhost:7051/Departamento/Getpornombre?nombre=' + this.Nombredepa).then((response) => {
                this.registrodepa = response.data.result;
                if (response.status == 200) {
                    document.getElementById('fkdepa').value = this.registrodepa[0].pkDepartamento;

                }

            })

            return true;

        },
        async convertirPuesto(){
            await axios.get('https://localhost:7051/Puesto/Getpornombre?name=' + this.nombrepuesto).then((response) => {
                this.registroPuesto = response.data.result;
                if (response.status == 200) {
                    document.getElementById('fkpado').value = this.registroPuesto[0].pkpuesto;
                }

            })

        }

    }    
}
 
</script>

<style scoped>
label {
    font-weight: bold;
}
</style>