import React, { useState } from "react";


interface IFormDetails {
  initialState: {};
  setFormDetails: React.Dispatch<React.SetStateAction<{}>>;
}

const FormDetails:React.FC<IFormDetails> = ({initialState, setFormDetails}) => {
  
  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
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