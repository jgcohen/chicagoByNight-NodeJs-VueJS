<template>
  <div class="container">
    <h1>The Players</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div
        class="post"
        v-for="(npc, index) in npcs"
        v-bind:item="npc"
        v-bind:index="index"
        v-bind:key="npc._id"
      >
      <p class="text">Name: {{npc.firstname}} {{npc.lastname}}</p>
      <p class="text">Description: {{npc.description}}</p>
      <p class="text">Status: {{npc.status}}</p>
      <p class="text">Race: {{npc.race}}</p>
      <p class="text">Clan: {{npc.clan}}</p>
      <p class="text">Faction: {{npc.faction}}</p>
        
<!-- 
      <div v-if="user._id === '610d06d929873844083145a7'">

  <input class="form-control" @change="onFileSelected" type="file" id="image">
     <button @click="upload" class="btn btn-primary" type="submit">Submit form</button>
      </div> -->
      
     </div>
    </div>
  </div>
</template>

<script>
import NpcService from "../services/NpcService";
import VueJwtDecode from "vue-jwt-decode";
import UserService from '../services/UserService'
export default {
  name: "NpcComponent",
  data() {
    return {
      selectedFile: null,
      user:"",
      npcs: [],
      error: "",
      name: "",
      lastname:"",
      description:"",
      status:"",
      race:"",
      clan:"",
      faction:"",
      image:""

    };
  },
  async created() {
    try {
      this.npcs = await NpcService.getNpcs()
    } catch (err) {
      this.error = err.message;
    }

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
  // methods: {
  //   onFileSelected(event){
  //     this.selectedFile= event.target.files[0]
  //     console.log( this.selectedFile)
  //   },
  //   upload() {

  //   }
  // },

  
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