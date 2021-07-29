<template>
  <div class="container">
    <h1>{{city[0].name}}</h1>

    <!-- <div>
<label for="create-city">new city</label>
<input type="text" id="create-city" v-model="text" placeholder="Create a city">
<button v-on:click="createCity">Create! </button>
    </div> -->

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
    };
  },
 
  async created() {
      try {
      const response = await CityService.getCity(this.$route.params.id)
      this.city = response.data
      console.log(this.city[0].name)
    } catch (err) {
      this.error = err.message;
    }
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