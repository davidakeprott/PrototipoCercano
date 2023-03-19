<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">Agregar Usuario</div>
            <div class="card-body">
                <form v-on:submit.prevent="">
                    <div class="form-group">
                        <label for="">user:</label>
                        <input type="text" class="form-control" name="user" 
                            aria-describedby="helpId" id="nombre" placeholder="Nombre" />
                        <small id="helpId" class="form-text" text-muted>Ingresa tu usuario</small>
                    </div>
                    <div class="form-group">
                        <label for="">Password:</label>
                        <input type="text" class="form-control" name="password" id="nombre" 
                            aria-describedby="helpId" placeholder="Proveedor" />
                        <small id="helpId" class="form-text" text-muted>Ingresa tu contraseña</small>
                    </div>
                    <div class="form-group">
                        <label for="">fkEmpleado:</label>
                        <input type="text" class="form-control" name="fkEmpleado" id="precio" 
                            aria-describedby="helpId" placeholder="Precio" />
                    </div>
                    <div class="form-group">
                        <label for="">fkRol:</label>
                        <input type="text" class="form-control" name="fkRol" id="precio"
                            aria-describedby="helpId" placeholder="Precio" />
                    </div>

                    <br />

                    <div class="btn-group" role="group">
                        |<button type="submit" class="btn btn-success">Agregar</button>|
                        |<router-link :to="{ name: 'dashboard' }" class="btn btn-danger">Cancelar</router-link>|
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
export default{
    name: "crearUser"
}
</script>