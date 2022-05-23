<template>

    <div>
        <nav class="navbar navbar-expand-lg navbar-light text-dark" style="background-color: #e3f2fd;">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand text-light" href="#">ProyectoMaestros</a>
                <!-- collapse navbar-collapse -->
                <div class="d-flex pr-4" id="navbarTogglerDemo03">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-light" :to="{name: 'tablaMaestros'}">Maestros</router-link>
                        </a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-light" :to="{name: 'form-create-item'}">Items</router-link>
                        </a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">
                            <router-link class="text-light" :to="{name: 'tablaItems'}">TablaItems</router-link>
                        </a>
                        </li>

                        <li class="nav-item">
                        <a class="nav-link" href="#">
                            <router-link class="text-light" :to="{name: 'formularioCrearMaestro'}"><span class="mr-2"><font-awesome-icon icon="circle-plus" /> </span></router-link>
                        </a>
                        </li>
                        
                    </ul>
                    <!-- <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form> -->
                </div>
            </div>
        </nav>
       
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style scoped>

.text-light{
    /* color: rgba(255, 255, 255, 0.842) !important; */
    color: rgba(0, 0, 0, 0.842) !important;
    text-decoration: none !important;
}

.pr-4{
    margin-right: 5%;
}

</style> 