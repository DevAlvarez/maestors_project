<template>

        <div class="row justify-content-center">

            <div class="col-md-12">

                <div class="card">

                    <div class="card-header"> <h4>Editar Maestro</h4></div>

                    <div class="card-body">

                        <form @submit.prevent="editar">

                            <div class="row">

                                <div class="col-4 mb-2">

                                    <div class="form-gropu">

                                        <label>Nombre</label>

                                        <input type="text" class="form-control" v-model="maestro.nombre" >

                                    </div>

                                </div>

                                <div class="col-12 mb-2">
                                
                                    <div class="form-floating">

                                        <textarea name="" class="form-control" id = "floatingTextarea2" v-model="maestro.descripcion" ></textarea>

                                        <label for="floatingTextarea2">Descripción</label>

                                    </div>

                                </div>

                                <div class="col-12">

                                    <button type="submit" class="btn btn-secondary w-100"><font-awesome-icon class="fa-2xl" icon="floppy-disk" /></button>

                                </div>                               

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

</template>

<script>
    export default {
        name: "form-edit-maestro",
        
        data() {
            return {
                name: "",
                maestro:{
                    nombre:"",
                    descripcion:""
                }
            };
          },

        mounted(){
            this.mostrarMaestros()
        },


        methods:{
           async mostrarMaestros(){
                this.axios.get(`/api/maestros/${this.$route.params.id}`)
                .then(response=>{
                    const {nombre, descripcion} = response.data
                    this.maestro.nombre = nombre,
                    this.maestro.descripcion= descripcion
                })
                .catch(error=>{
                    console.log(error);
                })
            },

            async editar(){
                this.axios.put(`/api/maestros/${this.$route.params.id}`, this.maestro)
                    .then(response=>{
                        this.$router.push({name:"tablaMaestros"})
                    })
                    .catch(error=>{
                    console.log(error);
                    })
            }
         }
        }

</script>
</script>
