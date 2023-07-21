import React from 'react'
import poke from './App'

export default function PokemonList({abilities}) {
  return (
    <div>
        <img src={poke.sprites.front_default} alt='pokemon'></img>
    </div>
)}