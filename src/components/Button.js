import React from "react";

function Button({text, isAClickButton, clickManagement}){
    return(
        <button className={ isAClickButton ? 'click-button' : 'reset-button'}
                onClick={clickManagement}> 
            {text}
        </button>
    )
}

export default Button;