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
      <p class="text">{{npc.firstname}} {{npc.lastname}}</p>
      <p class="text">{{npc.description}}</p>
      <p class="text">{{npc.status}}</p>
      <p class="text">{{npc.race}}</p>
      <p class="text">{{npc.clan}}</p>
      <p class="text">{{npc.faction}}</p>
     </div>
    </div>
  </div>
</template>

<script>
import NpcService from "../services/NpcService";
export default {
  name: "NpcComponent",
  data() {
    return {
      npcs: [],
      error: "",
      name: "",
      lastname:"",
      description:"",
      status:"",
      race:"",
      clan:"",
      faction:""

    };
  },
  async created() {
    try {
      this.npcs = await NpcService.getNpcs()
    } catch (err) {
      this.error = err.message;
    }
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