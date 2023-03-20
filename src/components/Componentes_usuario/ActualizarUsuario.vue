<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Actualizar Usuario</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="user">ID:</label>
                                <input type="number" class="form-control" name="user" aria-describedby="helpId" id="pkUsuario"
                                    placeholder="ID" v-model="pkUsuario" />
                                <small id="helpId" class="form-text" text-muted>Ingresa id del registro que desea
                                    actualizar</small>
                                    <br>
                                <button id="botonbusca" type="button" class="btn btn-outline-primary" v-on:click="Buscar(pkUsuario)" >Buscar</button>

                            </div>
                        </div>
                        <div id="user-password" style="display: none;">
                            <div class="col">

                                <div class="form-group">
                                    <label for="user">user:</label>
                                    <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                        placeholder="usuario" value="" />
                                    <small id="helpId" class="form-text" text-muted>Ingresa tu correo de usuario</small>
                                    

                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="password">Password:</label>
                                    <input type="text" class="form-control" name="password" id="password"
                                        aria-describedby="helpId" placeholder="password" value="" />
                                    <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small>
                                </div>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div id="fk-empleado-rol" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="fkEmpleado">fkEmpleado:</label>
                                <input type="number" class="form-control" name="fkEmpleado" id="fkEmpleado"
                                    aria-describedby="helpId" placeholder="fkEmpleado" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkRol">fkRol:</label>
                                <input type="number" class="form-control" name="fkRol" id="fkRol" aria-describedby="helpId"
                                    placeholder="fkRol" value="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            |<button type="submit" class="btn btn-outline-primary">Agregar</button>|
                            |<router-link :to="{ name: 'get' }" class="btn btn-outline-danger">Cancelar</router-link>|
                        </div>

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
import axios from 'axios'
export default {
    name: 'putUsuario',
    components: {

    },

    data() {
        return {
            Usuarios: [],
            smg: "",
            pkUsuario:0

        };
    },
    methods: {
        formulario() {
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            var cuerpo = {
                pkUsuario: this.pkUsuario,
                user: document.getElementById('user').value,
                password: document.getElementById('password').value,
                fechaRegistro: hoy.toISOString(),
                fkEmpleado: document.getElementById('fkEmpleado').value,
                fkRol: document.getElementById('fkRol').value,


            };          
            axios.put('https://localhost:7051/Usuario?id=' + this.pkUsuario, cuerpo).then((resutl) => {
                console.log(resutl.data);
                document.getElementById("alert").style.display = "block";
                this.smg = "Registro actualizado exitosamente :D/";
            })
        },
        Buscar(id){
            if(id>0){
                axios.get('https://localhost:7051/Usuario?id='+id).then((response)=>{
                
                this.Usuarios=response.data.result
                if(this.Usuarios==null){
                    console.log('no hay nada');
                }else{
                    document.getElementById('botonbusca').style.display="none";
                    document.getElementById('user-password','fk-empleado-rol').style.display="block";
                    document.getElementById('fk-empleado-rol').style.display="block";
                    document.getElementById('botones').style.display="block";

                    document.getElementById('user').value=this.Usuarios[0].user;
                    document.getElementById('password').value=this.Usuarios[0].password;
                    document.getElementById('fkEmpleado').value=this.Usuarios[0].fkEmpleado;
                    document.getElementById('fkRol').value=this.Usuarios[0].fkRol;
                    console.log(this.Usuarios)

                }
            })
            }else{
                window.alert("No hay valor de id");
            }

            
        }

    },

}

</script>