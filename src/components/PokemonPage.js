import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const jsonAPI = 'http://localhost:3001/pokemon'

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState("")



  useEffect( ()=> {
    fetch(jsonAPI)
    .then( r => r.json())
    .then( data => setPokemonList(data))

  }, [])

  function addPokemon(formData){

    formData.sprites = 
    {
      front : formData.frontUrl,
      back : formData.backUrl
    }

    delete formData.frontUrl
    delete formData.backUrl

    fetch(jsonAPI, {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => setPokemonList([...pokemonList, data]))

  }

  const filterPokemonList = pokemonList.filter(pokemon => {
    return pokemon.name.toUpperCase().includes(search.toUpperCase())
  }
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemonList={filterPokemonList} />
    </Container>
  );
}

export default PokemonPage;
