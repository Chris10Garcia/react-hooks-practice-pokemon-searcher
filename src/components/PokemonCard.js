import React from "react";
import { Card } from "semantic-ui-react";



function PokemonCard({pokemon}) {
  const {name, hp, sprites} = pokemon
  let toggle = false
  let image = sprites.front

  function handleOnClick(e){
    e.target.src = !toggle ? sprites.back : sprites.front
    toggle = !toggle
  }

  return (
    <Card>
      <div >
        <div onClick = {handleOnClick} className="image">
          <img src = {image} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
