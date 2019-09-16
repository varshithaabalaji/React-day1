import React from 'react';
import ReactDOM from 'react-dom';
import Propsdemo from './component/propsdemo';

//App is a functional component
const App = () =>
{
    const obj={
        name:'BCD',
        score:55
    }
    return (
        <div>
    <h1>Welcome</h1>
    <h3>
        <Greeting person="Amitab"/>
        <Propsdemo data="{obj}"/>
    </h3>
    </div>
    );
}
ReactDOM.render(<App />,document.querySelector('#root'));