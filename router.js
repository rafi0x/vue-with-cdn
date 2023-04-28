import Home from "./pages/Home/index.js";
import PageOne from "./pages/PageOne/index.js";
import PageTwo from "./pages/PageTwo/index.js";

export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/1', component: PageOne },
        { path: '/2', component: PageTwo }
    ]
})
