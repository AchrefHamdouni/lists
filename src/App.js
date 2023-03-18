import React from "react";
import Header from "./component/Header.jsx";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ShowAllPokemons from "./component/ShowAllPokemons.jsx";
import AddPokemon from "./component/AddPokemon.jsx";
import PokemonDetails from "./component/PokemonDetails.jsx";
import Filter from "./component/Filter.jsx";
import UpdatePokemon from "./component/UpdatePokemon.jsx";

function App() {
  const [list, setList] = useState([]);
  const [selectedPok, setSelectedPok] = useState("");
  const [update,setUpdate]=useState(false)
  const [showPok, setShowPok] = useState(false);


  useEffect(() => {
    Axios.get("http://localhost:8000/pokemons").then((result) => {
      setList(result.data);
    });
  }, []);

  const changeSelectedPokemon = (newPok) => {
    setSelectedPok(newPok);
    setShowPok(true);
  };

  return (
    <div>
      <Header />

      <div className="grid grid-cols-3 divide-x  flex justify-center">
        <div  className="col-span-2">
          <ShowAllPokemons list={list} handlePok={changeSelectedPokemon} />
        </div>
        <div className="ml-16 mt-12">
        <div >
          <div className="font-bold text-4xl text-red-600">Add Pokemon</div>
          <AddPokemon />
        </div>
        <div className="">
          <div className="font-bold text-4xl text-red-800">Pokemon Details</div>
          <PokemonDetails pokemon={selectedPok} update={update} setUpdate={setUpdate} />
          {update? (<UpdatePokemon />):""}
        </div>
        <div>
        <Filter list={list} />
        </div>
        
        </div>
      </div>
    </div>
  );
}

export default App;
