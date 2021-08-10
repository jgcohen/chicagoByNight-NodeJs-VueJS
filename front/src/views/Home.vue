<template>
<div>
  <div>
     <div id="nav">
    <button @click="logout">logout</button>
    <router-link to="/cities">Cities</router-link>|
    <router-link to="/npc">Famous faces</router-link>|
     <router-link to="/charactercreation">Create a character</router-link>|
  <router-view/>
  </div>
  </div>
  <div>
    <div v-if="user">
    <h1 class="text-danger">HELLO {{user.pseudo}} </h1>
    <h2>your email is: {{ user.email }}</h2>
  </div>
  </div>
   
    <div class="posts-container">
      
      <div
       
        v-for="(character, index) in characters"
        v-bind:item="character"
        v-bind:index="index"
        v-bind:key="character._id"
        
      >
      <div v-if="character.owner === user._id">
           <p class="text post"><router-link :to="`/updatecharacter/${character._id}`">{{character.name}}</router-link> </p>
     </div>
     </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UserService from '../services/UserService'
import HelloWorld from '@/components/HelloWorld.vue'
import VueJwtDecode from "vue-jwt-decode";
import CharacterService from '../services/CharacterService'
export default {
  name: 'Home',
  data(){
    return {
      characters:[],
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

  this.characters = await CharacterService.getCharacters()

    

  },
 
     methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
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
p.post {
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