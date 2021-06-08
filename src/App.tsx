import React, { useEffect, useState } from 'react';
import AddElements from './components/AddElements';
import FormDetails from './components/FormDetails';
import FormDisplay from  './components/FormDisplay';
import './App.css';

function App() {
  const [formDetails, setFormDetails] = useState({})
  const [addElements, setAddElements] = useState({})
  const [formDisplay, setFormDisplay] = useState({})

  useEffect(() => {
    console.log('hello itsik')
  },[formDetails, addElements]);
  
  return (
    <div className="App container">
     <h1>Form Generator</h1>
          <p>Forms Builder Tool - Easy to use!</p>
          <hr className="green-box"/>
      <div className="row">
        <div className="col-md">
          <FormDetails initialState={formDetails} setFormDetails={setFormDetails}/>
          <AddElements initialState={addElements} setAddElements={setAddElements} />
        </div>
        <div className="col-md">
          <FormDisplay initialState={formDisplay} setFormDisplay={setFormDisplay}/>
        </div>
      </div> 
      <div className="row">
        <button type="button" className="btn btn-success space-up ">Create Form</button> 
      </div>
    </div>
  );
}

export default App;
