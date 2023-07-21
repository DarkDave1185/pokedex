import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('');
  
  /* const searchPressed = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(response => response.json())
      .then((response) => {
        setPoke(response);
        console.log(response);
        const abilities = [response.abilities];
        console.log(abilities);
      })
    .catch(err => console.error(err));
  } */

  const searchPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${search}`
      const response = await axios.get(url)
      toArray.push(response.data);
      setType(response.data.types[0].type.name);
      setPokemon(toArray);
      console.log(response)
    } catch(e) {
      console.log(e)
    }
  };
  
  /* const handleChange = (e) => {
    setPokemon(e.target.value.toLowercase());
  }; */

  const handleSubmit = (e) => {
      e.preventDefault();
      searchPokemon();
  };
  
    return (
      <>
      <div className="App">
        {/*SEARCH*/}
        <h1 className="title">PokemonSearch</h1>
        <form onSubmit={handleSubmit}>
          {/* <label>
            <input type='text' placeholder='Search Pokemon'/>
            <button className="searchbutton">search</button>
          </label> */}
          <div >
          <input className="searchbar" type="text" placeholder='Pokemon Search' onChange={(e)=>setSearch(e.target.value)} />
          <button className="searchbutton" onClick={handleSubmit} onKeyDown={e => e.key === 'Enter' ? handleSubmit:''}>search</button>
        </div>
        </form>
        {pokemon.map((data) => {
          return (
            <div key={data} className='container'>
              <div className='dex-base container'>
          <div className='dex-cover'></div>
          <div className='dex-top book'>
            <div className='dex-lights'>
              <div className='dex-mainlight'></div>
              <div className='dex-lights first'></div>
              <div className='dex-lights second'></div>
              <div className='dex-lights third'></div>
            </div>
            <div className='dex-image border'>
              <div className='dex-image image'>
                <img src={data.sprites.other.home.front_default} alt='pokemon'/>
              </div>
              <div className='dex-image lights'></div>
              <div className='dex-pokemon'>
                <div className='dex-pokeid'>ID #{data.id}</div>
                <div className='dex-pokename'>{data.name}</div>
                <div className='dex-poketype'>{data.types[0].type.name}</div>
              </div>
            </div>
            <div className='dex-buttons'>
              <div className='dex-button one'></div>
              <div className='dex-button two'></div>
              <div className='dex-button three'></div>
              <div className='dex-button four'></div>
              <div className='dex-button id'></div>
            </div>
            <div className='dex-info base'>
              height:
              <div className='dex-info height'>
                {Math.round(data.height).toFixed(1) * 0.10}"m / 
                {Math.round(data.height).toFixed(2) * (0.35)}"ft
              </div>
              weight:
              <div className='dex-info weight'>
                {Math.round(data.weight).toFixed(2) * .10} kgs / 
                {Math.round(data.weight).toFixed(2) * (0.22)} lbs
              </div>
              ability:
              <div className='dex-info ability'>
                <div>{data.abilities[0].ability.name}</div>
                <div>{data.abilities[1].ability.name}</div>
              </div>
              move:
              <div className='dex-info move'>
                <div>{data.moves[0].move.name}</div>
              </div>
            </div>  
          </div>
        </div>
            </div>
          )
        })}
      </div>
      
    </>)
}
export default App