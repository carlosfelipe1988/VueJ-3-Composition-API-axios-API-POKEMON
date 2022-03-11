<script setup>
import PokemonPage from './pages/PokemonPage.vue';
import PokemonImage from './components/PokemonImage.vue';
import PokemonOptions from './components/PokemonOptions.vue';


</script>
<template>
  
  <PokemonPage  />
  <PokemonImage :pokemonId="150" :showPokemon="true"  />
  <PokemonOptions  />
</template>

