<script>
  import { Router } from "@roxi/routify";
  import firebase from "firebase";
  import { FirebaseApp } from "sveltefire";
  import { routes } from "../.routify/routes";

  let firebaseConfig = {
    // config goes here
  };

  firebase.initializeApp(firebaseConfig);
</script>

<FirebaseApp {firebase}>
  <Router {routes} />
</FirebaseApp>
