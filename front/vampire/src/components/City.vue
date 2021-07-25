<template>
    <div class="city">
        <h3>{{city.name}}
            <i @click="onDelete(city.id)" class="fas fa-times"></i>
        </h3>
        
    </div>
</template>

<script>
export default {
    name:'City',
    props: {
        city: Object
    },
    methods:{
        onDelete(id){
this.$emit('delete-city', id)
        }
    }
    }

</script>

<style>
    .fas{
        color: red;
    }
   .city {
       background: #f4f4f4;
       margin: 5px;
       padding: 10px 20px;
       cursor: pointer;
   } 

   .city h3 {
       display: flex;
       align-items: center;
       justify-content: space-between;
       }

</style>