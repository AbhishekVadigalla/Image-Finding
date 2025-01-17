import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import axios from 'axios';
import Gallery from './Gallery';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
function App() {
  const [search,setSearch]=useState('')
  const [data,setData]=useState([])
  const submitHandler=(e)=>{
    e.preventDefault()
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(response=>setData(response.data.photos.photo))
  }
  return (
    <div className="App">
      <center>
        <form onSubmit={submitHandler}>
          <h2>Gallery Snapshot</h2>
          <input type='text' value={search} onChange={(e)=>setSearch(()=>e.target.value)}/>   <br/> <br/>
          <input type='submit' name='Search'/>
        </form> <br/><br/>
        {data.length>=1?<Gallery data={data}/>:<h3>No Data Is Loaded</h3>}
      </center>
    </div>
  );
}

export default App;
