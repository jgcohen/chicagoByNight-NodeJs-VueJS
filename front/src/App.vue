<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <!-- <router-link to="/about">About</router-link> | -->
    <!-- <router-link to="/cities">Cities</router-link>|
    <router-link to="/npc">The players</router-link>| -->
    <!-- <router-link to="/signup">register</router-link>|
    <router-link to="/login">login</router-link> -->
  <router-view/>
  </div>
  <div>
  </div>
   </div>
  
</template>

// <script>
// // @ is an alias to /src
// import UserService from '../services/UserService'
// import HelloWorld from '@/components/HelloWorld.vue'
// import VueJwtDecode from "vue-jwt-decode";

// export default {
  
//   data(){
//     return {
//       user:"",
//       email:"",
//       pseudo:''
//     }
//   },
//   components: {
//     HelloWorld
    
//   },
//     async created() {
//     if (localStorage.getItem('token') === null) {
//       this.$router.push('/login');
//     }else{
//       // fetch("http://localhost:3000/user",{
//       //   method:'GET',
//       //   header:{
//       //     'Authorization':localStorage.getItem('token') 
//       //   }
//       // }).then(res=>res.json())
      
//       console.log(localStorage.getItem('token') )
//     }
//     let token = localStorage.getItem('token')
//     let decoded = VueJwtDecode.decode(token) 
     
    

//    let user = await UserService.getUser(decoded.user._id)
//    this.user= user


//   },
 
//      methods: {
//     logout() {
//       localStorage.clear();
//       this.$router.push('/login');
//     }
//   }
// }
// </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
