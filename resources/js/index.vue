<template>
    <div>
        <!-- <router-link to="/">Maestros</router-link>
        <router-link to="/crear-maestro">Crear</router-link> -->
        <Navbar></Navbar>
        <router-view></router-view> 
    </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";

export default {
    name:"Index",
    components:{
        Navbar,
    },
}
</script>