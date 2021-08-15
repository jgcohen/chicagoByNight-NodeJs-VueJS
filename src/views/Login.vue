<template>
  <div class="container">
    <div>
      <p>Log In</p>
      <label for="name">E mail</label>
      <input type="email" id="email" v-model="email" placeholder="Email" />
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="password"
      />
      <button v-on:click="connectUser">Log In</button>
      <p>Not registerd yet?</p>
      <router-link to="/signup">register</router-link>
    </div>
    <div v-if="user">
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
          this.error = err.response.data.error
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
