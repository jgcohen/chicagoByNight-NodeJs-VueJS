<template>
  <div>
    <button @click="logout">logout</button>
    <h1>HELLO {{ name }}</h1>
    <h2>your email is: {{ email }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src

import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    created() {
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }else{
      fetch("http://localhost:3000/user",{
        method:'GET',
        header:{
          'Authorization': localStorage.getItem('token') 
        }
      }).then(res=>res.json())
      .then(res=>{
        this.user = UserService.getUser( localStorage.getItem('token').user._id)
      })
    }
  },
 
     methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>
