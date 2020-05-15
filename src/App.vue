<template>
  <v-app id="app">
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
      <footer class="footer mt-10">
        &copy; Potato.Back, All Rights Reserved
      </footer>
    </v-content>
    <Sidebar/>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components:{
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
#app {
  background-color: white;
  font-family: "Raleway", sans-serif;
}
.footer {
  position: absolute;
  bottom: -50px;
  transform: translate(-50%, -50%);
  left: 50%;
  color: grey;
}
</style>
