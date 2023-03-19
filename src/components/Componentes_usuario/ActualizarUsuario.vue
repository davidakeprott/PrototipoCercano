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
                                <input type="text" class="form-control" name="user" aria-describedby="helpId" id="pkUsuario"
                                    placeholder="ID" v-model="Usuarios.pkUsuario" />
                                <small id="helpId" class="form-text" text-muted>Ingresa id del registro que desea actualizar</small>
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="user">user:</label>
                                <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                    placeholder="usuario" v-model="Usuarios.user" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu correo de usuario</small>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="text" class="form-control" name="password" id="password"
                                    aria-describedby="helpId" placeholder="password" v-model="Usuarios.password" />
                                <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="fkEmpleado">fkEmpleado:</label>
                                <input type="number" class="form-control" name="fkEmpleado" id="fkEmpleado"
                                    aria-describedby="helpId" placeholder="fkEmpleado" v-model="Usuarios.fkEmpleado"/>
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkRol">fkRol:</label>
                                <input type="number" class="form-control" name="fkRol" id="precio" aria-describedby="helpId"
                                    placeholder="fkRol" v-model="Usuarios.fkRol" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
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
            Usuarios: {},
            smg:"",
            
        };
    },
    methods: {
        formulario() {
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            var cuerpo = {
                pkUsuario:this.Usuarios.pkUsuario,
                user: this.Usuarios.user,
                password: this.Usuarios.password,
                fechaRegistro: hoy.toISOString(),
                fkEmpleado: this.Usuarios.fkEmpleado,
                fkRol: this.Usuarios.fkRol
            };
            axios.put('https://localhost:7051/Usuario?id='+this.Usuarios.pkUsuario,cuerpo).then((resutl)=>{
                console.log(resutl.data);
                document.getElementById("alert").style.display = "block";
                this.smg = "Registro actualizado exitosamente :D/";
            })
        },

    },

}

</script>