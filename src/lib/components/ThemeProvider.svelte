<script lang="ts">
     
     import { setContext } from "svelte";

     const theme = {
        primaryColor: 'blue',
        secondaryColor: 'gray'
     };

     setContext('theme', theme)
</script>
<slot></slot>