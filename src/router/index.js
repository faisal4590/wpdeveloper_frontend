import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [

  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login,
  // },
  // {
  //   path: "/video-info",
  //   name: "video-info",
  //   component: VideoInfo,
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
  // {
  //   path: "/add-video",
  //   name: "add-video",
  //   component: AddVideo,
  //   meta: {
  //     requiresAuth: true,
  //   },
  // }
  // ,
  // {
  //   path: "/video-lists",
  //   name: "video-lists",
  //   component: VideoLists,
  //   meta: {
  //     requiresAuth: true,
  //   },
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;