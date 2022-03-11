<script setup>
import { computed } from 'vue';
const props = defineProps({
    pokemonId: {
        type: Number,
        require: true
    },
    showPokemon: {
        type: Boolean,
        require: true
    }
})

const imgSRC = computed(()=>{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`
})
</script>

<template>
    <div class="pokemon-container">
        <img :src="imgSRC"
            class="hidden-pokemon"
            alt="pokemon">

        <img v-if="showPokemon" 
            :src="imgSRC"
            class="fade-in"
            alt="pokemon">

    </div>
</template>

<style scoped>
    /* Pokemon Picture */
    .pokemon-container {
        height: 230px;
    }
    img {
        height: 200px;
        position: absolute;
        left: calc(50% - 100px);
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
    .hidden-pokemon {
        filter: brightness(0);
    }

    
</style>