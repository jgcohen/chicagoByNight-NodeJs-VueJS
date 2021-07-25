<template>
    <header>
        <h1>Vampire The Masquerade</h1>
        <Button @toggle-add-city="$emit('toggle-add-city')" text ="Add town" color="green"/>
        <!-- <Button text ="Add Vampire" color="black"/>
        <Button text ="Add Faction" color="blue"/>  -->
    </header>
</template>

<script>
import Button from './Button.vue'
export default {
    name: 'Header',
    components: {Button}
}
</script>
<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}
</style>