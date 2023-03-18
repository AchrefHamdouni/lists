import React from 'react';
import  {useState} from "react";
import axios from 'axios'


const  AddPokemon = () => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [types, setTypes] = useState("");
    const [imageUrl, setImg] = useState("");

    const submit = () => {
        axios.post('http://localhost:8000/pokemon', {
              number,   
              name,
              types,
              imageUrl
        }).then(res => console.log(res))
        .catch(error =>console.log(error.message))
    }
  
        return (
        <div class="Form">
            <form>
            <div  className='font-bold text-xl mb-3 ' >
            <label className='mr-6' for="Number">Number</label>
            <input  id ="POSTnumber" type="text" name="Number" value={number} onChange={e=>setNumber(e.target.value)} /> 
            </div>
            <div className='font-bold text-xl mb-3'  >
            <label className='mr-11' for="Name">Name</label>
            <input id ="POSTname" type="text" name="Name" value={name}  onChange={e=>setName(e.target.value)} /> 
            </div>
            <div className='font-bold text-xl mb-3' >
            <label className='mr-12' for="Types">Types</label>
            <input id ="POSTtypes" type="text" name="types" value={types}   onChange={e=>setTypes(e.target.value)}  /> 
        </div>
        <div className='font-bold text-xl mb-3' >
            <label className='mr-11' for="image">Image</label>
            <input id ="POSTimageUrl" type="link" name="image" value={imageUrl}  onChange={e=>setImg(e.target.value)}  />
            </div>
          
       
            <button className='rounded-xl ml-12 mb-5 mt-5 bg-blue-700 text-white font-bold  py-2 px-2 rounded shadow border-2 border-gray-300 hover:bg-transparent hover:text-gray-500 transition-all duration-300' id="submit-button" onClick={submit} > Add Pokemon</button>
            

        </form>
        </div>
        )

}

 
export default AddPokemon