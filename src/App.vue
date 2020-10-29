<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import "@progress/kendo-ui";
import "@progress/kendo-theme-default/dist/all.css";

export default {
  components: {
    Navigation,
  },
  name: "app",
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
.k-grid-header .k-header {
  font-weight: bold !important;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
