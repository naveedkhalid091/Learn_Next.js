import React from "react";
import "./style.css";

const paragraghStyle={
    color:"orange",
    backgroundcolor: "DodgerBlue",
    padding:"10px",
    fontFamily:"Arial",
}

const page=()=>{
    return(
        <div>
            {/* inline styling only */}
            <h1 style={{color:"red"}}>CSS Basics</h1>
            
            {/* external styling vs Inline styling*/}
            <h2 style={{color:"green"}}>Inline Styling vs External Tag Selector (Prority is given to Inline)</h2>
            
            {/* external Tag styling Vs External className styling */}
            <h2 className="blue_head">Prrority is given to Class selector</h2>
            
            {/* External Tag styling vs External Id*/ }
            <h2 id="h0"> Priority is given to ID selector + an additional to tag selector</h2>
            
            
            {/* style in a variable - Internal styling*/} 
            <p style={paragraghStyle} id="h0">This is ParaGraph</p>
        
        </div>
    )
}

export default page;