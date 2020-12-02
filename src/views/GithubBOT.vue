<template>
  <v-app>
    <v-container>
      <div class="home">
        <!-- header -->
        <div class="header">
          <h1 class="text-center">Github bot</h1>
        </div>

        <!-- search pane container starts -->
        <div>
          <label for="">Github username: </label> <br />
          <v-text-field
            v-model="username"
            label="username"
            required
          ></v-text-field>
          <v-btn color="error" class="mr-4" @click="searchUser()">
            Extract
          </v-btn>
        </div>
        <!-- search pane container ends -->

        <!-- Show profile with repository container -->
        <div>
          <v-card class="mx-auto my-12" max-width="374">
            <v-img v-if="ownerAvatar" height="250" :src="ownerAvatar"></v-img>

            <v-card-title>Username: {{ username }}</v-card-title>

            <v-card-title>Repositories</v-card-title>
            <div class="from-database" v-if="fromDatabase">
              <v-list-item
                v-for="repository in repositoryList"
                :key="repository.id"
              >
                <v-list-item-content>
                  <v-list-item-title>{{
                    repository.id + '.' + repository.repository
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
            <div v-else-if="fromGithub">
              <v-list-item
                v-for="repository in repoFromGithub"
                :key="repository.id"
              >
                <v-list-item-content>
                  <v-list-item-title>{{
                    repository.id + '.' + repository.name
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-card>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import * as env_const from '../conf/env_const.js';
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      userID: null,
      repositoryList: [],
      repoFromGithub: [],
      userFoundInDBFlag: false,
      ownerAvatar: null,
      fromGithub: false,
      fromDatabase: false,
    };
  },

  methods: {
    searchUser() {
      var validation_msg = '';

      if (this.username == '') {
        validation_msg += 'Please give username \n';
      }

      if (validation_msg != '') {
        alert(validation_msg);
      } else {
        var url = env_const.base_url + '/search_user';
        var self = this;

        axios
          .post(url, {
            username: this.username,
          })
          .then(function(response) {
            // console.log(response);
            var data = response.data;
            var status = data.status;

            if (status == 200) {
              //
              //   alert('reached');
              self.userFoundInDBFlag = true;
              self.userID = data.payload.user_info[0].id;
              var url2 = env_const.base_url + '/get_user_repo_from_db';
              // var self = this;
              axios
                .post(url2, {
                  user_id: self.userID,
                })
                .then(function(response) {
                  //   console.log(response);
                  var data = response.data;
                  var status = data.status;

                  if (status == 200) {
                    self.fromDatabase = true;
                    self.fromGithub = false;
                    self.repositoryList = data.payload.repo_list;
                    // console.log(self.repositoryList);
                  } else {
                    self.fromDatabase = true;
                    self.fromGithub = false;
                  }
                })
                .catch(function(error) {
                  alert(error.toString());
                  //console.log(error);
                });
            } else {
              //   calling github api

              var url3 =
                'https://api.github.com/users/' + self.username + '/repos';

              axios
                .get(url3)
                .then(function(response) {
                  var data = response.data;
                  var status = response.status;
                  // console.log('faisal' + data[0].name);
                  if (status == 200) {
                    self.fromDatabase = false;
                    self.fromGithub = true;

                    self.repoFromGithub = data;
                    self.ownerAvatar = data[0].owner.avatar_url;
                    // console.log(self.ownerAvatar);
                  } else {
                    self.fromDatabase = false;
                    self.fromGithub = true;
                  }
                })
                .catch(function(error) {
                  alert(error.toString());
                  //console.log(error);
                });
            }
          })
          .catch(function(error) {
            alert(error.toString());
            //console.log(error);
          });
      }
    },
  },
};
</script>
