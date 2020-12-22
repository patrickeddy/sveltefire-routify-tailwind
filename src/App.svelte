<script>
  import { Router } from "@roxi/routify";
  import firebase from "firebase";
  import { FirebaseApp } from "sveltefire";
  import { routes } from "../.routify/routes";

  let firebaseConfig = {
    // config goes here
  };

  // firebase.initializeApp(firebaseConfig);
</script>

<style global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>

<FirebaseApp {firebase}>
  <Router {routes} />
</FirebaseApp>
