import { useState } from 'react';
import './App.css';
import { Users } from './users';

function App() {
  const [query, setQuery]=useState('')
  return (
    <div className="App">
      <div className='wrapp-top'>
        <div className='textUsers'>
          <h3>Users</h3>
          <p>{Users.length}</p>
        </div>
        <div className="search">
          <input type="text" className="search-field" onChange={(e)=>setQuery((e.target.value).toLowerCase())} placeholder="Search"/>
          <div className="search-icon"/>
        </div>
      </div>
      <div className='wrapp-center'>
        <div className='rowHeadList'>
          <div className='right'>
            <p>User Name</p>
            <div />
          </div>
          <div className='left'>
            <p>View</p>
            <p>Execute</p>
            <p>Modify</p>
            <p>Delete</p>
          </div>
        </div>
        <ul>
          {Users.filter((user)=>user.name.toLowerCase().includes(query)).map(e=>{
            return(
              <li>
                <div>
                  <span></span>
                  <p>{e.name}</p>
                </div>
                <div className='checkboxs'>
                  <input type="checkbox"/>
                  <input type="checkbox"/>
                  <input type="checkbox"/>
                  <input type="checkbox"/>
                  <div className='dots'></div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <button>Save</button>
    </div>
  );
}

export default App;
