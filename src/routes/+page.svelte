<script>
	import Add from '$lib/Add.svelte';
	import Minus from '$lib/Minus.svelte';
	import Reset from '$lib/Reset.svelte';
    import { count, isEven } from '$lib/store';

    /**
	 * @type {number}
	 */
    let count_val;
    count.subscribe((value) => {
        count_val = value;
    });
</script>
<h1>The count is {count_val}</h1>
<h2>The number is: {$isEven}</h2>
<Add />
<Minus />
<Reset />