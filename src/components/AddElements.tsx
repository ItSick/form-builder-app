import React from "react";

interface IAddElements {
  initialState: {};
  setAddElements: React.Dispatch<React.SetStateAction<{}>>;
}

const AddElements:React.FC<IAddElements> = ({initialState, setAddElements}) => {
  return (
    <div>
      <hr className="green-box" />
        <h4>Add Elements</h4>
        <div className="form-group">
          <label>Element Name:</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div>
          <label className="space-up">Element Type:</label>
            <div className="dropdown">
              <select className="slct">
                  <option disabled>Select Element</option>
                  <option>Text</option>
                  <option>Button</option>
                  <option>Checkbox</option>
                  <option>Select</option>
                  <option>Date</option>
                  <option>DatePicker</option> {/* datetime-local*/}
                  <option>Email</option>
                  <option>File</option>
                  <option>Number</option>
                  <option>Textarea</option>
                  <option>Range</option>
                  <option>Tel</option>
                  <option>Questionire</option>                 
              </select>
            </div>
        </div>
           <button type="button" className="btn btn-success space-up">add</button> 
           <hr className="green-box" />
    </div>
  );
}

export default AddElements;