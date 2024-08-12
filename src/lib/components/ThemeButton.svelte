<script >
    import { getContext } from "svelte";
    
    const theme = getContext('theme');

</script>

<style>
    button {
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>

<button style="background-color: {theme.primaryColor};"><slot /></button>