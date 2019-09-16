import React from 'react';
import {directive} from '@babel/core';

const Greeting = (props) =>{
    console.log(props);
    return(
        <h3>
            Welcome{props.person}
        </h3>
    );
}
export default Greeting;