<template>
<div>
  <div>
     <div id="nav">
    <button @click="logout">logout</button>
    <router-link to="/cities">Cities</router-link>|
    <router-link to="/npc">The players</router-link>|
  <router-view/>
  </div>
  </div>
  <div>
    <div v-if="user">
    <h1>HELLO {{user.pseudo}} </h1>
    <h2>your email is: {{ user.email }}</h2>
  </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserService from '../services/UserService'
import HelloWorld from '@/components/HelloWorld.vue'
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: 'Home',
  data(){
    return {
      user:"",
      email:"",
      pseudo:''
    }
  },
  components: {
    HelloWorld
    
  },
    async created() {
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }else{
      // fetch("http://localhost:3000/user",{
      //   method:'GET',
      //   header:{
      //     'Authorization':localStorage.getItem('token') 
      //   }
      // }).then(res=>res.json())
      console.log(localStorage.getItem('token') )
    }
    let token = localStorage.getItem('token')
    let decoded = VueJwtDecode.decode(token) 
     
    

   let user = await UserService.getUser(decoded.user._id)
   this.user= user


  },
 
     methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>
