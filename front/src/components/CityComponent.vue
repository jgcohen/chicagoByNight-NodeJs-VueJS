<template>
  <div class="container">
    <h1>The Cities</h1>
    <div>
<label for="create-city">new city</label>
<input type="text" id="create-city" v-model="text" placeholder="Create a city">
<button v-on:click="createCity">Create! </button>

    </div>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div
        class="post"
        v-for="(city, index) in cities"
        v-bind:item="city"
        v-bind:index="index"
        v-bind:key="city._id"
        v-on:dblclick="deleteCity(city._id)"
      >
      <p class="text">{{city.name}}</p>
     </div>
    </div>
  </div>
</template>

<script>
import CityService from "../services/CityService";
export default {
  name: "CityComponent",
  data() {
    return {
      cities: [],
      error: "",
      name: "",
    };
  },
  async created() {
    try {
      this.cities = await CityService.getCities()
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createCity(){
      await CityService.insertCity(this.text)
      this.cities = await CityService.getCities()
      
    },
    async deleteCity(id){
      if(confirm("Do you really want to delete?")){
      await CityService.deleteCity(id)
      this.cities = await CityService.getCities()
    }},
  }
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