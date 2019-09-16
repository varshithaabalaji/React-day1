import React from 'react';

const clickHandler = (event) => {
    alert('Button Clicked');
    console.log(event);
}

const Eventdemo = (props) => {
    return(
        <div>
            <h3>Event Demo Component</h3>
            <br/>
            <button onClick ={clickHandler}>Click</button>
        </div>
    )

}

export default Eventdemo;