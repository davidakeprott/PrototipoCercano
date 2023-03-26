<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Factura</div>
            <small id="helpId" class="form-text" text-muted>Mofique los apartados que desea cambiar</small>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="user">ID:</label>
                                <input type="number" class="form-control" name="user" aria-describedby="helpId"
                                    id="pkFactura" placeholder="ID" v-model="pkFactura" />
                                <small id="peticion" class="form-text" text-muted>Ingresa id del registro que desea
                                    actualizar</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkFactura)">Buscar</button>
                                    &#160
                                    <router-link :to="{ name: 'getfactura' }" class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                        <div id="user-fecha" style="display: none;">
                            <div class="col">

                                <div class="form-group">
                                    <label for="razonsocial">razonsocial:</label>
                                    <input type="text" class="form-control" name="razonsocial" aria-describedby="helpId"
                                        id="razonsocial" placeholder="razonsocial" value="" />



                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="fecha">fecha:</label>
                                    <input type="text" class="form-control" name="fecha" id="fecha"
                                        aria-describedby="helpId" placeholder="fecha" value="" />

                                </div>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div id="fk-empleado-rol" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="rfc">rfc:</label>
                                <input type="text" class="form-control" name="rfc" id="rfc"
                                    aria-describedby="helpId" placeholder="rfc" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkCliente">fkCliente:</label>
                                <input type="fkCliente" class="form-control" name="fkCliente" id="fkCliente" aria-describedby="helpId"
                                    placeholder="fkCliente" value="" />
                            </div>
                        </div>
        
                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;">|<router-link :to="{name:'getfactura'}" type="button" class="btn btn-outline-primary">Finalizar</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            |<button type="submit" class="btn btn-outline-primary">Actualizar</button>|
                            |<router-link :to="{ name: 'getfactura' }" class="btn btn-outline-danger">Cancelar</router-link>|
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
    name: 'putfactura',
    components: {

    },

    data() {
        return {
            Facturas: [],
            smg: "",
            pkFactura: 0,
            bad: "",
        };
    },
    methods: {
        formulario() {
            var cuerpo = {
                pkFactura: this.pkFactura,
                razonsocial: document.getElementById('razonsocial').value,
                fecha: document.getElementById('fecha').value,
                rfc: document.getElementById('rfc').value,
                fkCliente: document.getElementById('fkCliente').value,

            };
            axios.put('https://localhost:7051/Factura?id=' + this.pkFactura, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById("alert").style.display = "block";
                document.getElementById('botones').style.display = "none";
                this.smg = "Registro actualizado exitosamente :D/";
                document.getElementById('botoncerrar').style.display="block";
            })
        },
        Buscar(id) {
            if (id > 0) {
                axios.get('https://localhost:7051/Factura?id=' + id).then((response) => {

                    this.Facturas = response.data.result
                    if (this.Facturas == null) {
                        document.getElementById('alert2').style.display = "block";
                        this.bad = "No hay ningun registro de ese ID"
                    } else {
                        document.getElementById('botonbusca').style.display = "none";
                        document.getElementById('peticion').style.display = "none";
                        document.getElementById('user-fecha', 'fk-empleado-rol').style.display = "block";
                        document.getElementById('fk-empleado-rol').style.display = "block";
                        document.getElementById('botones').style.display = "block";
                        document.getElementById('alert2').style.display = "none";


                        document.getElementById('razonsocial').value = this.Facturas[0].razonSocial;
                        document.getElementById('fecha').value = this.Facturas[0].fecha;
                        document.getElementById('rfc').value = this.Facturas[0].rfc;
                        document.getElementById('fkCliente').value = this.Facturas[0].fkCliente;

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