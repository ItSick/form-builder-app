import React, { useState } from "react";


// The interface is here to declare the props of the component.
// as a regular TypeScript behavior, you can use "?" in order to make a prop optional
// I think you should think about using an interface to initiate the state in the father component >>
// e.g IFormDetailsParams {name: string, category: string, description: string} AND THEN useState<IFormDetailsParams>
interface IFormDetails {
  initialState: {};
  setFormDetails: React.Dispatch<React.SetStateAction<{}>>;
}


const FormDetails:React.FC<IFormDetails> = ({initialState, setFormDetails}) => {
  
  // For each kind of event you will need to create another handle function. Why?
  // as you know we need to give event a type in order to get the right props
  // you can do this by hover over an element and you will see the types very quickly
  // e.g changeEvent = React.ChangeEvent<HTMLInputElement> AND clickEvent = React.MouseEvent<HTMLInputElement, MouseEvent>
  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the values of the event target
    // I would recommend use a library like lodash to prevent unexpectedExceptions and nil values.
    const {name, value} = event.target;
    // If we wouldnt destructure, each letter would overwrite the last letter so im keeping the initial state and adding to it.
    // This is kind of the convention in the React "World", You will do it over and over and over again.
    setFormDetails({...initialState, [name]: value});
  }

  return (
    <div>
    <h4>Form Details</h4>
        <div className="form-group">
            <label>Form Name:</label>
            <input type="text" className="form-control" name="name" onChange={(event) => setValue(event)}/>
            <label>Category:</label>
            <input type="text" className="form-control" name="category" onChange={(event) => setValue(event)} />
            <label>description:</label>
            <input type="text" className="form-control" name="description" onChange={(event) => setValue(event)}  />
          </div>
          <hr/>
    </div>
  );
}

export default FormDetails;