import React from 'react';

const User=(props)=>{
    console.log(props); 
    console.log(props.data);
    console.log(props.data.name);

    const {data}=props
    return(
        <div>
            <h1>User Component </h1>
            <h1>NAme:: {props.data.name}</h1>
            <h1>Age:: {data.age}</h1>
            <h1>Address::    {props.data.address}</h1>
        </div>
    )
}

export default User;