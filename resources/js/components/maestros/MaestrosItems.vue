<template>

    <div class="row justify-content-center">
        
        <div class="col-md-12">

            <div class="table-responsive">
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
                                
                                {{maestro.nombre}}
                                             
                            </td>
                            <td>{{maestro.descripcion}}</td>     
                            <td>
                                <router-link :to=' {name:"form-edit-item", params:{id:maestro.id} }' class="btn btn-outline-light" >
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
        name:"maestroItems",
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
                await this.axios.get(`/api/maestros/${this.$route.params.id}/items`)
                .then(response=>{
                    this.maestros=response.data.data
                })
                .catch(error=>{
                    this.maestros = []
                })
            },

            deleteMaestro(id){
                if (confirm("¿Estás seguro de querer borrar este registro?")) {
                    this.axios.delete(`/api/items/${id}`)
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
