<template>

    <div class="row justify-content-center h-25">
        
        <div class="col-md-12 ">

            <div class="table-responsive overflow-scroll">
                <table class="table table-dark table-striped table-hover">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr v-for="maestro in maestros" :key="maestro.id">
                            <td>{{maestro.id}}</td>
                            <td>
                                <router-link class="text-white" :to="{ name: 'maestroItems', params:{id:maestro.id} }">
                                    {{maestro.nombre}}
                                </router-link>                              
                            </td>
                            <td>{{maestro.descripcion}}</td>     
                            <td>
                                <router-link :to=' {name:"form-edit-maestro", params:{id:maestro.id} }' class="btn btn-outline-light" >
                                    <font-awesome-icon icon="pen-to-square" />
                                </router-link>
                                <a type="button" @click="deleteMaestro(maestro.id)" class="btn btn-outline-danger">
                                    <font-awesome-icon icon="trash-can" />
                                </a>
                            </td>                       
                        </tr>

                        

                    </tbody>

                </table>
            </div>


        </div>

    </div>
        

</template>

<script>
    export default {
        name:"tablaMaestros",
        data() {
            return{
               maestros: []
            }
        },

        mounted(){
            this.mostrarMaestros()
        },

        methods:{
            async mostrarMaestros(){
                await this.axios.get('/api/maestros')
                .then(response=>{
                    this.maestros=response.data
                })
                .catch(error=>{
                    this.maestros = []
                })
            },

            deleteMaestro(id){
                if (confirm("¿Estás seguro de querer borrar este registro?")) {
                    this.axios.delete(`/api/maestros/${id}`)
                    .then(response=>{
                    this.mostrarMaestros()
                })
                    .catch(error=>{
                    console.log("Error");
                })
                } 
            }
        }
    }
</script>

<style scoped>
.text-white{
    text-decoration: none !important;
}

.text-white:hover{
    color: darkgoldenrod !important;
    text-decoration: none !important;
}

/* .alto{
    height: 5%!important;
} */
</style>
