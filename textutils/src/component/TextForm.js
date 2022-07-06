import React,{useState} from "react";

export default function TextForm(props) {

const handleUpClick = () => {
// console.log("Uppercase was clicked " + text);
let newText = text.toUpperCase();
setText(newText);
}

const handleLwClick = () => {
let newText = text.toLowerCase();
setText(newText);
}

const handleOnChange = (event) => {
// console.log("On Change was clicked");
setText(event.target.value)
}




const [text,setText] = useState('Enter Your Descriptions.....');
// text = 'Enter Your Descriptions' // in react we cannot assign the variable like this
// setText('Enter Your Descriptions...');
return (

  
  <div>
      <div className="mb-3">
    <h1 className="my-3">{props.heading}</h1>
    
    <textarea
      className="form-control"
      id="myBox"
      rows="10"
      value={text}
      onChange={handleOnChange}
    ></textarea>
  </div>
  <div className="button btn btn-primary " onClick={handleUpClick}>Covert to Uppercase</div>
  <div className="button btn btn-primary m-2" onClick={handleLwClick}>Covert to LowerCase</div>
  </div>

);
}

