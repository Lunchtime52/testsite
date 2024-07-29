import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router.js";
// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// import fontawesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// ... other imports
import { fas } from "@fortawesome/free-solid-svg-icons";

// ...
// library.add(fas); // Add the solid icons to the library

createApp(App)
  // .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
