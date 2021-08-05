<template>
  <div>
    <button @click="logout">logout</button>
    <h1>HELLO {{ name }}</h1>
    <h2>your email is: {{ email }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    created() {
    //user is not authorized
    if (localStorage.getItem('token') === null) {
      this.$router.push('/login');
    }
  },
    // mounted() {
     
    //   axios.get('http://localhost:3000/user/', { headers: { token: localStorage.getItem('token')}})
    //     .then(res => {
    //       this.name = res.data.user.name;
    //       this.email = res.data.user.email;
    //     })
    // },
     methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>
