// import logo from './logo.svg';mode
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import React, { useState } from 'react';
import Alert from './component/Alert';
// import {Switch } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Route,

// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode=()=>{
    if(mode==="light"){

      setMode("dark")
      document.body.style.backgroundColor="#0f2444"
      showAlert(" Dark Mode has enabled  !!","success")
      document.title= "textUtils-Dark Mode"
    }
    else{

      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert(" Light mode has enabled !!","success")
      document.title= "textUtils-Light Mode"
    }
  }
  return (
    
    <>
   
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
   {/* <Switch>
   
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
          </Route>
    </Switch>  */}
    <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter" mode={mode}/>
    </div>

  
    </> 

  );
}

export default App;
