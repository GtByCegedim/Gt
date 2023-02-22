<script>
import navbar from "../component/navbar.vue";
import firstComponent from "../component/firstComponent.vue";
import secondComponent from "../component/secondComponent.vue";
import thirdComponent from "../component/thirdComponent.vue";
import fourthComponent from "../component/fourthComponent.vue";

export default {
  components: {
    "v-navbar": navbar,
    "v-component1": firstComponent,
    "v-component2": secondComponent,
    "v-component3": thirdComponent,
    "v-component4": fourthComponent,
  },
};
</script>
<template>
  <header></header>
  <div>
    <v-navbar></v-navbar>
    <v-component1></v-component1>
    <v-component2></v-component2>
    <v-component3></v-component3>
    <v-component4></v-component4>
  </div>
</template>
