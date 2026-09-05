<script lang="ts">
import {Router} from "svelte-routing";
import NavBar from "$lib/layout/navBar.svelte";
</script>

<main class="w-screen h-dvh bg-slate-900 text-white" >
  <Router>
    <NavBar />
  </Router>
</main>
