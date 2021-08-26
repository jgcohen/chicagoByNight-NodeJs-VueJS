<template>
  <div class="container">
    <h3 class="text-danger mt-3">Please Register</h3>
      <div>
<label for="email">Your Email</label>
<input type="email" class="form-control mb-3"  id="email" v-model="email" placeholder="Email">
<label for="password">Password (8 caracters minimum)</label>
<input type="password" class="form-control mb-3" id="password" v-model="password" placeholder="password">
<label for="pseudo">Pseudo</label>
<input type="text" class="form-control mb-3" id="pseudo" v-model="pseudo" placeholder="Pseudo">
<button class="btn btn-primary mt-1" v-on:click="createUser">Register </button>
<div class=" m-3 text-danger" v-if="error">
  {{error}}
</div>
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
      pseudo:''
 
     
    };
  },

  methods: {
     async createUser(){
       if(this.password.length >= 8 ){
      await SignUpService.insertUser(this.email,this.password,this.pseudo)  
      this.$router.push('/login')
       } else{
         this.error = "Password is too short"
       }
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
