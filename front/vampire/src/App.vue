<template>
  <div class="container">
    <Header @toggle-add-city="toggleAddCity" />
    <div v-if="showAddCity">
    <AddOneCity @add-city="addCity"/>
    </div>
    <Cities @delete-city="deleteCity" :cities="cities"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Cities from "./components/Cities.vue";
import AddOneCity from "./components/AddOneCity.vue"


export default {
  name: "App",
  components: {
    Header,
    Cities,
    AddOneCity
    
  },
  data(){
    return{
      cities: [],
      showAddCity: false
    }
  },
  methods: {

    toggleAddCity(){
      this.showAddCity =!this.showAddCity
    },
    async fetchCities(){
      const res = await fetch('api/city')
      const data = await res.json()

      return data
    },
    async fetchCity(id){
      const res = await fetch(`api/city/${id}`)
      const data = await res.json()

      return data
    },
   async  addCity(city){
     const res = await fetch('api/city',{
       method: 'POST',
       headers: {
         'Content-Type': 'application/json', 
       },
         body: JSON.stringify(city)
     })
     const data = await res.json()
      this.cities= [...this.cities, data]
    },
    async deleteCity(id){
      if(confirm('Are you sure?')){
        const res = await fetch(`api/city/${id}`, {
          method: 'DELETE'
        })
        res.status == 200 ? (this.cities = this.cities.filter((city) => city.id !== id)) : alert('Error deleting City')
      
  }
    }
  },
 async  created(){
    this.cities = await this.fetchCities()
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
