<script setup>
import { reactive, onMounted, ref } from 'vue';
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPogemonOptions from '@/helpers/getPokemonOptios';



let pokemonsArr = reactive([])
const pokemonDinamic = reactive({})
const showPokemon = ref(false)
const showAnswer = ref(false)
const message = ref('')


const mixPokemonsArr = async ()=>{
  const respuesta = await getPogemonOptions();
  pokemonsArr.push(...respuesta)
  const rndInt = Math.floor(Math.random() * 4)
  pokemonDinamic.data = pokemonsArr[rndInt]

}

onMounted(()=>{
  mixPokemonsArr()
})


const checkAnswer = (selctedId)=> {
  showPokemon.value = true
  showAnswer.value = true
  if(selctedId === pokemonDinamic.data.id){
    message.value = `Correcto, ${pokemonDinamic.data.name} `
  }else{
    message.value = `Oops era, ${pokemonDinamic.data.name}`
  }
}

const newGame = ()=>{
  pokemonsArr.splice(0, 4)
  showAnswer.value = false
  showPokemon.value = false
  mixPokemonsArr(pokemonDinamic.data)
}

</script>
<template>
  
  <h1 v-if="!pokemonDinamic.data">Espere por favor...</h1>
  
  <div v-else="pokemonDinamic.data">
    <h1>¿Quién es este pokemon?</h1>
    <PokemonImage 
      :pokemonId="pokemonDinamic.data.id" 
      :showPokemon="showPokemon"  />

    <PokemonOptions 
      @selection="checkAnswer" 
      :pokemonsArr="pokemonsArr"  />


    <template v-if="showAnswer" class="fade-in">
      <h2>{{message}} </h2>
      
      <button @click="newGame" class="btn-new-game">Nuevo juego</button>

    </template>
</div>
</template>

<style scoped>
  .btn-new-game{
    background-color: rgb(241, 70, 70);
    color: #fff;
    border: navajowhite;
    display: inline-block;
    padding: 15px 35px;
    font-size: 20px;
    margin-top: 12px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>