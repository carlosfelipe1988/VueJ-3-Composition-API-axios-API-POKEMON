import axios from "axios";

const pokemontAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export default pokemontAPI;
