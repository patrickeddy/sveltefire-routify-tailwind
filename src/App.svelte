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
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
</style>

<FirebaseApp {firebase}>
  <Router {routes} />
</FirebaseApp>
