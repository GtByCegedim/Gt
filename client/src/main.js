import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store  from "./store/store"; // Import your Vuex store instance
import "./index.css";

const app = createApp(App);

// Add the Vuex store to your Vue app
app.use(store);

// Add the Vue router to your Vue app
app.use(router);

// Mount your Vue app to the DOM
app.mount("#app");
