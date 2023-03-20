<template>
  <div class="login">
    <h1 class="title">Inicio de sesion</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#email">Email:</label>
      <input class="form-input" type="text" id="email" required placeholder="Email" v-model="email">
      <label class="form-label" for="#password">Password:</label>
      <input class="form-input" type="password" id="password" placeholder="Password" v-model="password">
      <input class="form-submit" type="submit" value="Login">
    </form>
    <div id="alert" style="display: none;" class="alert alert-danger" role="alert">{{ smg }}</div>
  </div>
</template>
  
<script>
import axios from 'axios'
export default {
  data: () => ({
    email: "",
    password: "",
    respuesta: [],
    smg:"",
  }),
  methods: {
    login() {
      axios.get('https://localhost:7051/validacion?valor1=' + this.email + '&valor2=' + this.password ).then((response) => {
        console.log(response.data);
        this.respuesta = response.data.result

        if (this.respuesta.length>0) {
          this.$router.push("/menugeneral")
        }else{
          this.smg="Usuario o password incorrecto :("
          document.getElementById('alert').style.display="block";
        }
      })

    }
  }
};
</script>
  
<style lang="scss" scoped>
.login {
  padding: 2rem;
}

.title {
  text-align: center;
}

.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;

  &:first-of-type {
    margin-top: 0rem;
  }
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;

  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0b9185;
  }
}</style>