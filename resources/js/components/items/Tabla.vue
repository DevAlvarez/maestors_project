<template>

    <div class="row justify-content-center">

        <div class="col-md-8">

            <div class="table-responsive">
                <table class="table table-dark table-striped table-hover">

                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr v-for="itemMaestro in itemMaestros" :key="itemMaestro.id">
                            <td>{{itemMaestro.id}}</td>
                            <td>{{itemMaestro.nombre}}</td>
                            <td>{{itemMaestro.descripcion}}</td>     
                            <td>
                                <router-link :to=' {name:"form-edit-maestro", params:{id:itemMaestro.id} }' class="btn btn-info" >
                                    <font-awesome-icon icon="pen-to-square" />
                                </router-link>
                                <a type="button" @click="deleteMaestro(itemMaestro.id)" class="btn btn-danger">
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

        props:[
            'maestro'
        ],
        name:"tablaItems",
        data() {
            return{
               itemMaestros: []
            }
        },

        mounted(){
            this.mostrarItems()
        },

        methods:{
            async mostrarItems(){
                await this.axios.get('/api/items')
                .then(response=>{
                    this.itemMaestros=response.data
                })
                .catch(error=>{
                    this.itemMaestros = []
                })
            },

            deleteMaestro(id){
                if (confirm("¿Estás seguro de querer borrar este item?")) {
                    this.axios.delete(`/api/items/${id}`)
                    .then(response=>{
                    this.mostrarItems()
                })
                    .catch(error=>{
                    console.log("Error");
                })
                } 
            }
        }
    }
</script>
