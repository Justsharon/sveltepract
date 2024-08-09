<script>
	import { count } from '$lib/store';

	const minus = () => {
		count.update((n) => n - 1)
	}
</script>
<button on:click={minus}>
	-
</button>