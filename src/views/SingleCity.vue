<template>
  <div class="container">
    <div v-if="city">
    <h1>{{city.name}}</h1>
    <p>{{city.description}}</p>
    <div>
<label for="update-name">Update Name</label>
<input type="text" id="update-name" v-model="name" placeholder="City's name">
<label for="update-description">Update Description</label>
<input type="text" id="update-description" v-model="description" placeholder="City's description">
<button v-on:click="updateCity">Create! </button>
    </div>
</div>
  </div>
</template>

<script>
import CityService from "../services/CityService";
export default {
  name: "SingleCityComponent",
  data() {
    return {
      city: "",
      error: "",
      name: "",
      description:""
    };
  },

  async created() {
      try {
        this.city = await CityService.getCity(this.$route.params.id)
        this.name = this.city.name
        this.description = this.city.description
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
     async updateCity() {
      console.log(this.$route.params.id)
      if(confirm("Do you really want to update?")){
      await CityService.updateCity(this.$route.params.id, this.name, this.description)
      this.cities = await CityService.getCities()
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
