import Home from "../views/HomeView.vue";
import {createRouter, createWebHistory} from "vue-router";
import PageNotFound from "../components/PageNotFound.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home, name: "home"},
        {path: "/:pathMatch(.*)*", component: PageNotFound, name: "notFound"}
    ],
})

export default router


