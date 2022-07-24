import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

//use state can only be initialised inside react component state or app function
  


function App() {
  const [code, setCode] = useState("print(5)")
 
  //post function
    function postPiston() {  
      const newdataa = {language: "python2",
      version: "2.7.18",
      files: [
        {content:code},          
      ],
      compile_timeout: 10000,
      run_timeout: 3000,
      compile_memory_limit: -1,
      run_memory_limit: -1}

      const url ="https://emkc.org/api/v2/piston/runtimes"
      const postUrl = "https://emkc.org/api/v2/piston/execute"

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

    const handleCodeChange = (event) =>{
      setCode(event.target.value);
      console.log(code);
    }

  return (
    <div className="App">
      <header className="App-header">
      <label htmlFor='Message'>MEssage</label>
        <textarea rows={4} cols={50} id="Message" value={code} onChange={handleCodeChange}></textarea>
        <button onClick={postPiston}></button>
      </header>
    </div>
  );
}

export default App;
