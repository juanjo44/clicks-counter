import React from 'react';
import '../css/Counter.css'

function Counter({ clickAmount }){
    return(
        <div className="counter">
            {clickAmount}
        </div>
    );
}

export default Counter;