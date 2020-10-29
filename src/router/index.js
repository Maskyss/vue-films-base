import Vue from "vue";
import Router from "vue-router";
import Empty from "components/Empty";
import Film from "components/Film";
import Actor from "components/Actor";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Empty",
      component: Empty,
    },
    {
      path: "/film/:id",
      name: "Film",
      component: Film,
    },
    {
      path: "/actor/:id",
      name: "Actor",
      component: Actor,
    },
  ],
});
