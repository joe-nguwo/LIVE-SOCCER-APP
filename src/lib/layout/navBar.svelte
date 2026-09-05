<!-- navbar.svelte -->
<script lang="ts">
	import {
		Root,
		List,
		Item,
		Link as NavigationMenuLink,
	} from "$lib/components/ui/navigation-menu/index.js";

	import { Link } from "svelte-routing";
</script>

<Root class="w-full max-w-none bg-slate-900 text-white px-60 py-2">
	<List class="flex w-full flex-row justify-between items-center">
		<Item>
			<NavigationMenuLink>
				<Link to="#">LATEST RESULTS</Link>
			</NavigationMenuLink>
		</Item>

		<Item>
			<NavigationMenuLink>
				<Link to="#">FIXTURES</Link>
			</NavigationMenuLink>
		</Item>

		<Item>
			<NavigationMenuLink>
				<Link to="#">STANDINGS</Link>
			</NavigationMenuLink>
		</Item>

		<Item>
			<NavigationMenuLink>
				<Link to="#">ITALIAN LEAGUE</Link>
			</NavigationMenuLink>
		</Item>
	</List>
</Root>
