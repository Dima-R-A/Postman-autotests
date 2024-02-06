// autotest for https://api.pokemonbattle.me:9104/pokemons

var response = JSON.parse(responseBody);
pm.collectionVariables.set("pokemon_id", response.id);

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});