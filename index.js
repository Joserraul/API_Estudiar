const url = 'https://pokedex2.p.rapidapi.com/pokedex/uk';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'fb08216d1bmsh2ed7f5941266469p1052cdjsnb666b30b9832',
		'x-rapidapi-host': 'pokedex2.p.rapidapi.com'
	}
};

async function getPokemon() {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
}

try {
  getPokemon();
} catch (error) {
  console.error(error);
}

