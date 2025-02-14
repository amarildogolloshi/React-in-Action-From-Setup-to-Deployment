import { useEffect, useState } from 'react'

import './App.css'

import Nav from "./components/Nav"
import Counter from "./components/Counter"
import ListCast from "./components/ListCast"
import Modals from "./components/Modals"

function App() {
  const name= 'Startgazers'

  const [cast,setCast] = useState([]);
  let [memberInfo, setMemberInfo] = useState(null);

 

    async function fetchCast() {
        const response = await fetch('cast.json');
        setCast(await response.json());
    }

    useEffect( () => {
        fetchCast();
    } )

  return (
    <div className='container'>
      <Nav cast={cast} onChoice={ (info) => { setMemberInfo(info) } } />
      <img src="images/group.svg" alt="Star gazers Group" />
      <hgroup>
        <h1>Meet the <i style={{color:"SteelBlue", fontSize: '3rem'}}>{name}</i></h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      </hgroup>
      {
        memberInfo && 
        <Modals 
          member={memberInfo} 
          handleClose={ () => { setMemberInfo(null) }}
          handleChange={ (info) => { setMemberInfo(cast[info]) }  }

        />
      }

      <ListCast cast={cast} onChoice={(info) => {setMemberInfo(info)} }/>
    </div>
  )
}

export default App
