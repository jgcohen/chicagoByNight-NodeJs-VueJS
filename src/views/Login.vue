<template>
  <div class="container">
       <h3 class="text-danger mt-3">Log in</h3>
    <div>
      <label  for="name">E-mail</label>
      <input class="form-control mb-3" type="email" id="email" v-model="email" placeholder="Email" />
      <label  for="password">Password</label>
      <input
      class="form-control mb-3"
        type="password"
        id="password"
        v-model="password"
        placeholder="password"
      />
      <button  class="btn btn-primary mt-1" v-on:click="connectUser">Log In</button>
      <div class="text-danger mt-5" v-if="error">
        {{error}}
      </div>
      <p class="mt-5">Not registerd yet?</p>
      <router-link to="/signup">register</router-link>
    </div>
    <div class="text-danger m-3" v-if="user">
      <p>{{ user.data.body._id }}</p>
    </div>
  </div>
</template>

<script>

import LoginService from "../services/LoginService";
export default {
  name: "LoginComponent",
  data() {
    return {
      user: "",
      error: "",
      email:'',
      password:'',
    };
  },

 methods: {
     async connectUser(){
       await LoginService.connectUser(this.email,this.password).then(res => {
          //if successfull
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push('/');
          }
        }, err => {
          console.log(err.response);
          this.error = "Wrong Email or Password"
        })
     }

  },
}
</script>

<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: 3bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
