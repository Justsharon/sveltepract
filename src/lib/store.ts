import { writable, derived } from "svelte/store";
export const count = writable(0);
export const isEven = derived(count, ($count) => $count % 2 === 0 ? 'Even' : "Odd")