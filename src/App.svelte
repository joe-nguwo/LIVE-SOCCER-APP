<script lang="ts">
import {QueryClient, QueryClientProvider} from "@tanstack/svelte-query";
	import { Router } from "svelte-routing";
	import Routes from "$lib/routes/routes.svelte";
	import NavBar from "$lib/layout/navBar.svelte";
	const queryClient = new QueryClient();
</script>

<main class="w-screen h-dvh bg-slate-900 text-white">
<QueryClientProvider client={queryClient}>
	<Router>
		<NavBar />
		<Routes />
	</Router>
	</QueryClientProvider>
</main>