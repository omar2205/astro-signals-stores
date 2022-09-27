<script>
  import { nanostore_counter } from '../signals'
</script>

<div class="header">
  <h1 class="title">Astro</h1>
  <h1>Nanostore: {$nanostore_counter}</h1>
</div>

<style>
  .header {
    margin: 6rem 2rem 2rem 2rem;
  }
  h1 {
    line-height: 8px;
  }
  h1.title {
    font-size: 3rem;
    font-weight: 300;
  }
</style>