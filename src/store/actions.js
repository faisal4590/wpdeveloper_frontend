import * as types from "./mutations-types";

export const setAuthObj = ({ commit }, auth_obj) => {
  commit(types.SET_AUTH_TOKEN, auth_obj.auth_token);
  commit(types.SET_AUTH_USER_ID, auth_obj.username);
  commit(types.SET_AUTH_USER_STATUS, auth_obj.access_level);
  commit(types.SET_AUTH_USER_EMAIL, auth_obj.email);
  commit(types.SET_AUTH_USER_AGE, auth_obj.age);
};

export const setOpenedVideoID = ({ commit }, video_id) => {
  commit(types.SET_OPENED_VIDEO_ID, video_id);
};

export const logOut = ({ commit }) => {
  commit(types.LOGOUT);
};
