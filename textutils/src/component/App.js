import React from "react";
import Navbar from "./Navbar";
import TextForm from "./TextForm"


function App() {
  return (
    <>
    <Navbar title='TextUtils' aboutText='About TextUtils'/>

    <div className="container">
    <TextForm heading='Enter The Text To Analyze...'/>
    </div>
    
    </>
    
    
  )
}
export default App;




// In function based component react is not imported bez we not use it.

