<template>
  <div class="container">
      <div>
<label for="name">Register</label>
<input type="email" id="email" v-model="email" placeholder="Email">
<label for="password">your Email</label>
<input type="password" id="password" v-model="password" placeholder="password">
<button v-on:click="createUser">Register </button>

    </div>
  </div>
</template>

<script>
import SignUpService from "../services/SignUpService";
export default {
  name: "SignUpComponent",
  data() {
    return {
      user: "",
      error: "",
      email:'',
      password:'',
 
     
    };
  },

  methods: {
     async createUser(){
      await SignUpService.insertUser(this.email,this.password)  
      this.$router.push('/login')
    },
  },
};
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
