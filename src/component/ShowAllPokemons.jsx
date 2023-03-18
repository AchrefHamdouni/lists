import React, { useState } from "react";

function ShowAllPokemons({ list, handlePok }) {
  const [showList, setShowList] = useState(false);
  return (
    <div>
      <h1
        className="font-bold text-4xl text-red-400 cursor-pointer mt-6"
        onClick={() => setShowList(!showList)}
      >
        Pokemon's List
      </h1>
      {showList ? (
        <ul className="grid grid-cols-6 grid-rows-3  font-bold ml-16">
          {list.map((pokemon) => (
            <li key={pokemon.number}>
              <img
                src={pokemon.imageUrl}
                width={100}
                height={100}
                onClick={() => handlePok(pokemon)}
              />
              {pokemon.name}{" "}
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default ShowAllPokemons;
