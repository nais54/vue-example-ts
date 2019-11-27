<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/eqpplan">EqpPlan</router-link>
    </div>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
});
</script>
