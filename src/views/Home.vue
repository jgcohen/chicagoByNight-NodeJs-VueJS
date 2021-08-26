<template>
<div>
  <div>
     <div id="nav">
    <!-- <router-link to="/cities">Cities</router-link>| -->
    <router-link to="/npc">Famous faces</router-link>|
     <router-link to="/charactercreation">Create a character</router-link>|
    <button @click="logout">logout</button>
  <router-view/>
  </div>
  </div>
  <div>
    <div v-if="user">
    <h3 class="text-danger">Welcome {{user.pseudo}} </h3>
    <h5>Your characters: </h5>
    <!-- <h2>your email is: {{ user.email }}</h2> -->
  </div>
  </div>
   
    <div class="posts-container">
      
      <div
       
        v-for="(character, index) in characters"
        v-bind:item="character"
        v-bind:index="index"
        v-bind:key="character._id"
        
      >
      <div class="row m-2" v-if="character.owner === user._id">
            <p class="text post col">{{character.name}}</p>
           <p class="text post col"><router-link :to="`/character/${character._id}`">Character sheet</router-link> </p>
           <p class="text post col"><router-link :to="`/updatecharacter/${character._id}`">Update</router-link> </p>
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
  border: 1px solid #ee3030;
  background-color: 3bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: rgb(207, 38, 16);
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>