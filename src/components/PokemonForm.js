import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {
  const [formData, setFormData] = useState({
    name: "",
    hp : 0,
    frontUrl : '',
    backUrl : '',
    sprites : ''
  })

  function handleOnChangeForm (e){
    const key = e.target.name
    const value = e.target.value

    setFormData({...formData, [key] : value})
  }

  function handleSubmit(e){
    e.preventDefault()
    addPokemon(formData)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={ handleSubmit } >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange = {handleOnChangeForm}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange = {handleOnChangeForm}/>
          <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange = {handleOnChangeForm}/>
          <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange = {handleOnChangeForm}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
