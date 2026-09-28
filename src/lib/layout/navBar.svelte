<script lang="ts">
	import {
		Root,
		List,
		Item,
		Link as NavigationMenuLink,
	} from "$lib/components/ui/navigation-menu/index.js";

	import { Link } from "svelte-routing";
</script>

<Root class="w-full max-w-none bg-slate-900 text-white px-6 py-4">
	<List class="flex w-full flex-row justify-center items-center gap-x-8">
		<Item>
			<NavigationMenuLink>
				<Link to="/">LATEST RESULTS</Link>
			</NavigationMenuLink>
		</Item>

		<Item>
			<NavigationMenuLink>
				<Link to="/fixtures">FIXTURES</Link>
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