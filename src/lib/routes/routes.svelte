<script lang="ts">
	import { Route } from "svelte-routing";
	import LatestResults from "$lib/pages/latest-results.svelte";
	import Fixtures from "$lib/pages/fixtures.svelte";
</script>

<main>
	<Route path="/" exact>
		<LatestResults />
	</Route>

	<Route path="/fixtures">
		<Fixtures />
	</Route>
</main>