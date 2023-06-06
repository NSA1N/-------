import Vue from "vue";
import Vuex from "vuex";
import main from "./modules/main";
import skills from "./modules/skills";
import post from "./modules/post";
import slider from "./modules/slider";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    main,
    skills,
    slider,
    post,
  },
});
