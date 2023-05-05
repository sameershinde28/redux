import React from 'react';

const User=(props)=>{
    return(
        <div>
            <h1 style={{color:"white",textTransform:'uppercase',display:"block"}}>User Component {props.data.name}</h1>
        </div>
    )
}

export default User;