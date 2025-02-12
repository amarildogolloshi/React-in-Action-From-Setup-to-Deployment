import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <img src="images/group.svg" alt="Star gazers Group" />
      <h1>Meet the Startgazers</h1>
      <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
      <button onClick={() => alert('Hi there') }>Click Me</button>
    </div>
  )
}

export default App
