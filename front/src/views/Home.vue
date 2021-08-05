<template>
  <div>
    <button @click="logout">logout</button>
    <div v-if="user">
    <h1>HELLO </h1>
    <h2>your email is: {{ user.email }}</h2>
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
      email:""
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
