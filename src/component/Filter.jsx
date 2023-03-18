import React,{useState} from 'react'

function Filter({list}) {

    const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div>
      <h1  className="font-bold text-4xl text-red-1000">Search</h1>
      <form>
      <input id='filtred' type="text" placeholder='type of pokemon' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}>
      </input>
      </form>
     <button className="rounded-xl ml-12 mb-5 mt-5 bg-blue-700 text-white font-bold  py-2 px-2 rounded shadow border-2 border-gray-300 hover:bg-transparent hover:text-gray-500 transition-all duration-300" >Get it</button>
      </div>
    </div>
  )
}

export default Filter
