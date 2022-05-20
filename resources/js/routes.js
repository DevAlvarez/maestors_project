import VueRouter from "vue-router";
import TablaMaestros from "./components/maestros/Tabla";
import FormularioCrearMaestro from "./components/maestros/FormularioCrearMaestro";

const routes = [
    {
        path: "/",
        component: TablaMaestros,
        name: "TablaMaestros",
    },

    {
        path: "/crear-maestro",
        component: FormularioCrearMaestro,
        name: "FormularioCrearMaestro",
    },

];


const router = new VueRouter({
    routes,
    mode:"history"
});

export default router;