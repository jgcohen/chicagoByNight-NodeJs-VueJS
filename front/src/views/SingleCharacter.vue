<template>
  <div class="container">
    <div v-if="character">
    <h1>{{character.name}}</h1>
    <p>{{character.clan}}</p>
    <div>
<label for="update-name">Update Name</label>
<input type="text" id="update-name" v-model="name" placeholder="Character's name">
<label for="update-clan">Update clan</label>
<input type="text" id="update-clan" v-model="clan" placeholder="character's clan">
<button v-on:click="updatecharacter">Create! </button>
    </div>
</div>
  </div>
</template>

<script>
import CharacterService from "../services/CharacterService";
export default {
  name: "SinglecharacterComponent",
  data() {
    return {
      character: "",
      error: "",
      name: "",
      clan:""
    };
  },

  async created() {
      try {
        this.character = await CharacterService.getCharacter(this.$route.params.id)
        this.name = this.character.name
        this.clan = this.character.clan
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
     async updateCharacter() {
      console.log(this.$route.params.id)
      if(confirm("Do you really want to update?")){
      await characterService.updatecharacter(this.$route.params.id, this.name, this.clan)
      this.characters = await CharacterService.getCharacters()
      }},
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
