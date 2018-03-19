/**
 * Created by Administrator on 2018/3/13.
 */
import Vue from "vue";
import App from "./App.vue";
/*引入全局样式*/
import "./static/css/mui.min.css";
import "./static/css/main.css";
import "./static/js/rem.js";
import '../node_modules/mint-ui/lib/style.css';
import mint from "mint-ui";
Vue.use(mint);
import Vrouter from "vue-router";
Vue.use(Vrouter);
import resource from "vue-resource";
Vue.use(resource);
/*路由配置*/
import home from "./component/home/home.vue";
import books from "./component/books/books.vue";
import movie from "./component/movie/movie.vue";
import moviexq from "./component/movie/moviexq.vue";
import music from  "./component/music/music.vue";
import photo from  "./component/photo/photo.vue";

let router=new Vrouter({
    linkActiveClass:"mui-active",
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/books',component:books},
        {path:'/movie',component:movie},
        {path:'/moviexq/:id',component:moviexq},
        {path:'/music',component:music},
        {path:'/photo',component:photo},
    ]

})

new Vue({
    el:"#view",
    router:router,
    render:function (created) {
        return created(App)
    }
})