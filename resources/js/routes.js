import VueRouter from "vue-router";
import Home from "./Home";
import FormularioCrearMaestro from "./components/maestros/FormularioCrearMaestro";
import FormularioEditMaestro from "./components/maestros/FormularioEditarMaestro.vue";
import FormularioCrearItem from "./components/items/FormularioCrearItem.vue";
import TablaItems from "./components/items/Tabla.vue";
import Inicio from "./inicio.vue";

const routes = [
    {
        path: "/",
        component: Home,
        name: "home",
    },

    {
        path: "/inicio",
        component: Inicio,
        name: "inicio",
    },

    {
        path: "/crear-maestro",
        component: FormularioCrearMaestro,
        name: "formularioCrearMaestro",
    },

    {
        path: "/editar-maestro",
        component: FormularioEditMaestro,
        name: "form-edit-maestro",
    },

    {
        path: "/crear-item",
        component: FormularioCrearItem,
        name: "form-create-item",
        props:true
    },

    {
        path: "/tabla-item",
        component: TablaItems,
        name: "tablaItems",
        props: true
       
    },



];


const router = new VueRouter({
    routes,
    mode:"history"
});

export default router;