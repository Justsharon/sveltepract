<script>
    import { count } from '$lib/store';

    const add = () => {
        count.update((n) => n + 1)
    }
</script>

<button on:click={add}>
	+
</button>