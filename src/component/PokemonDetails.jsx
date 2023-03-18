import React from "react";
import axios from "axios";

function PokemonDetails({ pokemon,update,setUpdate }) {

const deletePok=(testNum)=>{
    axios.delete(`http://localhost:8000/${testNum}`)
    .then((response) => {
      console.log("hello");
    })
    .catch((error) => {
      console.error(error);
    });
}
  return (
    <div>
      <div>
        <ul className="font-bold ml-24">{pokemon.number}</ul>
        <ul className="font-bold ml-12">{pokemon.name}</ul>
        <ul>{pokemon.type}</ul>
        <img className=" ml-12" src={pokemon.imageUrl} width={100} height={100}  />
        <button className="rounded-xl ml-6 mb-5 mt-5 bg-blue-700 text-white font-bold  py-2 px-2 rounded shadow border-2 border-gray-300 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
        >Edit</button>
        <button className="rounded-xl ml-12 mb-5 mt-5 bg-blue-700 text-white font-bold  py-2 px-2 rounded shadow border-2 border-gray-300 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
        onClick={deletePok(pokemon.number)}>Delete</button>
      </div>
     
    </div>
  );
}

export default PokemonDetails;
