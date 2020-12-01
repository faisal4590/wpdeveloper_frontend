import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import { mutations } from "./mutations";
import * as actions from "./actions";

const state = {
  user_id: "",
  auth_token: "",
  opened_video_id: "",
  access_level: "",
  email:"",
  age:""
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState()],
  modules: {},
});
