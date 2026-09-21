<script lang="ts">
  let count = $state(0)
</script>

<main class="grid min-h-svh place-items-center bg-slate-950 px-6 py-12 text-slate-100">
  <section class="w-full max-w-lg space-y-6">
    <p class="text-sm font-medium uppercase tracking-widest text-sky-400">Svelte + Tailwind CSS</p>
    <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">svelte-spa</h1>
    <p class="text-lg leading-relaxed text-slate-400">Your app is ready to build.</p>
    <button
      type="button"
      class="cursor-pointer rounded-lg bg-sky-400 px-5 py-3 font-semibold text-slate-950 hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
      onclick={() => count += 1}
    >
      Count is {count}
    </button>
  </section>
</main>
