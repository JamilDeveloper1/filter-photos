import React, { useState } from 'react'
import Data from './Data';

const App = () => {

const [searchTerm,setSearchTerm] = useState("");


  return (
    <div className='container'>
      <h1>Nature Photos</h1>
      <div className="inputContainer">
        <input 
        className='search' 
        type="text" 
        placeholder='Enter the title...' 
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
      </div>
      <div className="dataContainer">
        {
      Data.filter((val) =>{
        if(searchTerm == ""){
          return val;
        }else if(val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val;
        }
      })
          .map(item =>{
            return(
              <div className="data" key={item.id}>
                <img src={item.url} alt="" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App