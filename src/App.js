import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const {state, setState} = useState(0)
  
  
  useEffect(()=>{
    
    const url ="https://emkc.org/api/v2/piston/runtimes"
    const postUrl = "https://emkc.org/api/v2/piston/execute"
    // console.log({codeFile});
    const newdataa = {language: "python2",
    version: "2.7.18",
    files: [
      {content:"print(5)"},          
    ],
    compile_timeout: 10000,
    run_timeout: 3000,
    compile_memory_limit: -1,
    run_memory_limit: -1}

    //post 
    const postPiston = () => {
      fetch(postUrl, {
        method: 'POST',
        //media type of resource
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify(newdataa),
       
      })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log('Success:', data);
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error('Error:', error);
      });
      
    }
    postPiston();
  }, )
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={null}></button>
      </header>
    </div>
  );
}

export default App;
