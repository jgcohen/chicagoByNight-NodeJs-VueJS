<template>
<div>
    <div v-for="city in cities" :key="city.id" >
        <City @delete-city=" $emit('delete-city',city.id)" :city="city"/>
       
    </div>
    </div>
</template>

<script>
import City from './City.vue'

export default {
    name:"Cities",
    props: {
        cities: Array
    },
    components: {
        City
    },
    emits: ['delete-city']
}
</script>