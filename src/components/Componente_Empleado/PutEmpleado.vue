<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Empleado</div>
            <small id="helpId" class="form-text" text-muted>Mofique los apartados que desea cambiar</small>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="user">ID:</label>
                                <input type="number" class="form-control" name="user" aria-describedby="helpId"
                                    id="pkEmpleado" placeholder="ID" v-model="pkEmpleado" />
                                <small id="peticion" class="form-text" text-muted>Ingresa id del registro que desea
                                    actualizar</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkEmpleado)">Buscar</button>
                                    &#160
                                    <router-link :to="{ name: 'getempleado' }"
                                        class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                        <div id="user-apellidos" style="display: none;">
                            <div class="col">

                                <div class="form-group">
                                    <label for="nombre">Nombre:</label>
                                    <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                        id="nombre" placeholder="nombre" value="" />



                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="apellidos">Apellidos:</label>
                                    <input type="text" class="form-control" name="apellidos" id="apellidos"
                                        aria-describedby="helpId" placeholder="apellidos" value="" />

                                </div>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div id="fk-empleado-rol" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="dirreccion">Dirreccion:</label>
                                <input type="text" class="form-control" name="dirreccion" id="dirreccion"
                                    aria-describedby="helpId" placeholder="dirreccion" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="ciudad">Ciudad:</label>
                                <input type="ciudad" class="form-control" name="ciudad" id="ciudad"
                                    aria-describedby="helpId" placeholder="ciudad" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkPuesto">fkPuesto:</label>
                                <input type="number" class="form-control" name="fkPuesto" id="fkPuesto"
                                    aria-describedby="helpId" placeholder="fkPuesto" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkDepartamento">fkDepartamento:</label>
                                <input type="number" class="form-control" name="fkDepartamento" id="fkDepartamento"
                                    aria-describedby="helpId" placeholder="fkDepartamento" value="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;">|<router-link :to="{ name: 'getempleado' }" type="button"
                            class="btn btn-outline-primary">Finalizar</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                            |<router-link :to="{ name: 'getempleado' }"
                                class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                        <div id="alert2" class="alert alert-warning" role="alert" style="display:none;">{{ bad }}</div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'putcliente',
    components: {

    },

    data() {
        return {
            Empleados: [],
            smg: "",
            pkEmpleado: 0,
            bad: "",
        };
    },
    methods: {
        formulario() {
            var cuerpo = {
                pkEmpleado: this.pkEmpleado,
                nombre: document.getElementById('nombre').value,
                apellidos: document.getElementById('apellidos').value,
                dirreccion: document.getElementById('dirreccion').value,
                ciudad: document.getElementById('ciudad').value,
                fkPuesto: document.getElementById('fkPuesto').value,
                fkDepartamento: document.getElementById('fkDepartamento').value,
            };
            console.log(cuerpo);
            axios.put('https://localhost:7051/Empleado?id=' + this.pkEmpleado, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById("alert").style.display = "block";
                document.getElementById('botones').style.display = "none";
                this.smg = "Registro actualizado exitosamente :D/";
                document.getElementById('botoncerrar').style.display = "block";
            })
        },
        Buscar(id) {
            if (id > 0) {
                axios.get('https://localhost:7051/Empleado?id=' + id).then((response) => {

                    this.Empleados = response.data.result
                    if (this.Empleados == null) {
                        document.getElementById('alert2').style.display = "block";
                        this.bad = "No hay ningun registro de ese ID"
                    } else {
                        document.getElementById('botonbusca').style.display = "none";
                        document.getElementById('peticion').style.display = "none";
                        document.getElementById('user-apellidos', 'fk-empleado-rol').style.display = "block";
                        document.getElementById('fk-empleado-rol').style.display = "block";
                        document.getElementById('botones').style.display = "block";
                        document.getElementById('alert2').style.display = "none";


                        document.getElementById('nombre').value = this.Empleados[0].nombre;
                        document.getElementById('apellidos').value = this.Empleados[0].apellidos;
                        document.getElementById('dirreccion').value = this.Empleados[0].dirreccion;
                        document.getElementById('ciudad').value = this.Empleados[0].ciudad;
                        document.getElementById('fkPuesto').value = this.Empleados[0].fkPuesto;
                        document.getElementById('fkDepartamento').value = this.Empleados[0].fkDepartamento;

                    }
                })
            } else {
                document.getElementById('alert2').style.display = "block";
                this.bad = "No hay valor de ID"
            }


        }

    },

}

</script>