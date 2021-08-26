<template>
  <div>
    <h1>NPC CREATION</h1>

    <label for="firstname">Firstname</label>
    <input
    class="form-control mb-3"
      type="text"
      id="firstname"
      v-model="firstname"
      placeholder="First Name"
    />

    <label for="lastname">Lastname</label>
    <input
    class="form-control mb-3"
      type="text"
      id="lastname"
      v-model="lastname"
      placeholder="Last Name"
    />

    <label for="description">Description</label>
    <input
    class="form-control mb-3"
      type="text"
      id="description"
      v-model="description"
      placeholder="Description"
    />

    <label for="status">Status</label>
    <input class="form-control mb-3" type="text" id="status" v-model="status" placeholder="Status" />

    <label for="race">Race</label>
    <input class="form-control mb-3" type="text" id="race" v-model="race" placeholder="Race" />

    <label for="clan">Clan</label>
    <input class="form-control mb-3" type="text" id="clan" v-model="clan" placeholder="Clan" />

    <label for="faction">Faction</label>
    <input class="form-control mb-3" type="text" id="faction" v-model="faction" placeholder="faction" />

    
  <label for="image" class="form-label">Multiple files input example</label>
  <input class="form-control" type="file" id="image"  multiple>


    <button class="btn btn-primary" v-on:click="createNpc">Create!</button>
  </div>
</template>

<script>
import NpcService from "../services/NpcService";
export default {
  name: "NpcCreationComponent",
  data() {
    return {
        selectedFile: null,
      npcs: [],
      error: "",
      firstname: "",
      lastname: "",
      description: "",
      status: "",
      race: "",
      clan: "",
      faction: "",
      image: "",
    };
  },
  methods: {
      onFileSelected(event){
          this.selectedFile = event.target.file[0]
      },
    async createNpc() {
      await NpcService.insertNpc(
        this.firstname,
        this.lastname,
        this.description,
        this.status,
        this.race,
        this.clan,
        this.faction,
        this.image = this.selectedFile
      );
    //    this.$router.push('/npc');
    },
    
  },
};
</script>