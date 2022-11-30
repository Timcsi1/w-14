import React, { useState } from "react";

function ButtonStateChange() {

  const [buttonText, setButtonText] = useState("Click here");

  return (
    
      <button
        onClick={() => {
          if (buttonText=== "Click here"){
            setButtonText("clicked");
        }
    else {
        setButtonText("stop clicking");
    }
}}

      >
        {ButtonText}
      </button>
      );
    }
     
  export default ButtonSateChange();