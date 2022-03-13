import pokemontAPI from "../api/pokemontAPI";

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, index) => index + 1);
};

const getPogemonOptions = async () => {
  const mixPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonsNames(mixPokemons.splice(0, 4));
  return pokemons;
};

const getPokemonsNames = async ([a, b, c, d] = []) => {
  const promiseArr = [
    pokemontAPI.get(`/${a}`),
    pokemontAPI.get(`/${b}`),
    pokemontAPI.get(`/${c}`),
    pokemontAPI.get(`/${d}`),
  ];
  const [p1, p2, p3, p4] = await Promise.all(promiseArr);
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};

export default getPogemonOptions;
