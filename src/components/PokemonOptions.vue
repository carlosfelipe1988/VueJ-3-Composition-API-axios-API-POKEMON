<script setup>
    defineProps({
        pokemonsArr: {
            type: Array,
            require: true
        }
    })

    //defineEmits('selection')
    //console.log(this.$emit('selection'))
</script>

<template>
    <div class="options-container">
        <ul>
            <li 
                v-for="pokemon in pokemonsArr" 
                :key="pokemon.id" 
                @click="$emit('selection', pokemon.id)"
                
                > {{ pokemon.name }} </li>
        </ul>
    </div>
</template>


<style scoped>
    /* Pokemon Options */
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        background-color: white;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        width: 250px;
        color: rgba(0, 0, 0)
    }

    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
        color: aliceblue;
    }

    .options-container {
        display: flex;
        justify-content: center;
    }
</style>