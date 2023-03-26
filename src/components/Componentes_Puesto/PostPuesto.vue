<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar Cliente</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="nombre">Nombre:</label>
                                <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                    id="nombre" placeholder="Puesto" v-model="Puestos.nombre" />
                                <small id="helpId" class="form-text" text-muted>Ingresa el puesto</small>
                            </div>

                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'getpuesto' }"
                                class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>
                        <router-link :to="{ name: 'getpuesto' }" class="btn btn-outline-primary" id="finaliza"
                            style="display: none;">Finalizar</router-link>
                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
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
    name: "postpuesto",
    components: {

    },

    data() {
        return {
            Puestos: {},
            smg: "",
        };
    },
    methods: {
        formulario() {

            var cuerpo = {
                nombre: this.Puestos.nombre,
            };

            axios.post('https://localhost:7051/Puesto', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display = "none";
                    this.smg = "agregado exitosamente :D/";
                    document.getElementById('finaliza').style.display = "block";
                    console.log(result);
                }
                // window.location.href = "dashboard";

            })

            console.log(cuerpo)
        }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
}
</style>