import * as types from "./mutations-types";

export const mutations = {
  // auth mutations
  [types.SET_AUTH_TOKEN](state, auth_token) {
    state.auth_token = auth_token;
  },
  
  [types.SET_AUTH_USER_ID](state, user_id) {
    state.user_id = user_id;
  },
  
  [types.SET_AUTH_USER_STATUS](state, access_level) {
    state.access_level = access_level;
  },
  [types.SET_AUTH_USER_EMAIL](state, email) {
    state.email = email;
  },
  [types.SET_AUTH_USER_AGE](state, age) {
    state.age = age;
  },
  [types.SET_OPENED_VIDEO_ID](state, video_id) {
    state.opened_video_id = video_id;
  },
  [types.LOGOUT](state) {
    state.auth_token = "";
    state.user_id = "";
    state.access_level = "";
    state.opened_video_id = "";
    state.email = "";
    state.age = "";
  },
};
