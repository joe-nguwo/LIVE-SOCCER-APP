<script lang="ts">
import { createQuery } from '@tanstack/svelte-query'
import { LiveScore } from "$lib/api/endpoint";
  const query = createQuery(() => ({
    queryKey: ['livescore'],
    queryFn: async () => {
      const res = await LiveScore()
      return res
     
    },
  }));
</script>

<main>
{#if query.isPending}
  <p>Loading ....</p>
{:else if query.isError}
  <p>Error: {query.error.message}</p>
{:else if query.isSuccess}
<p>success</p>
  <ul>
    {#each query.data as data}
      <li>{data}</li>
    {/each}
  </ul>
{/if}

</main>
