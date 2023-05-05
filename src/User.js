import React from 'react';
import './App.css';

const User=(props)=>{
    console.log(props);
    console.log(props.data);
    console.log(props.data.name);
    return(
        <div className='demo'>
            <h1>User Component {props.data.name}</h1>
        </div>
    )
}

export default User;