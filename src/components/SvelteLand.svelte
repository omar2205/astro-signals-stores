<script lang="ts">
  import { svelte_store, nanostore_counter } from "../signals";
</script>

<div class="el svelte">
  <h3>Svelte land</h3>
  <h1>Nanostore: {$nanostore_counter}</h1>

  <button
    on:click={() => {
      $svelte_store++;
      $nanostore_counter++;
    }}
  >
    Svelte Store: {$svelte_store}
  </button>
</div>

<style>
  .svelte {
    outline: 1px solid rgb(255, 0, 0);
  }
</style>
