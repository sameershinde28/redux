import React from 'react';

const User=(props)=>{
    console.log(props);
    console.log(props.data);
    console.log(props.data.name);
    return(
        <div>
            <h1>User Component </h1>
            <h1>{props.data.name}</h1>
        </div>
    )
}

export default User;