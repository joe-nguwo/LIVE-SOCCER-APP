<script lang="ts">
	import { Router } from "svelte-routing";
	import Routes from "$lib/routes/routes.svelte";
	import NavBar from "$lib/layout/navBar.svelte";
</script>

<main class="w-screen h-dvh bg-slate-900 text-white">
	<Router>
		<NavBar />
		<Routes />
	</Router>
</main>