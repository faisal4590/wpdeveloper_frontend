<template>
  <div id="app">
    <GithubBOT />
  </div>
</template>

<script>
import GithubBOT from './views/GithubBOT';

export default {
  name: 'App',

  components: {
    GithubBOT,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
body {
  background-color: #f6f6f6;
}
</style>
