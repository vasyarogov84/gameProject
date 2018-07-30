import React from 'react';


let Navbar = (props) => {
    return (
        <div style={{"float":"right"}}>
            <ol>
                {props.user.map((el) => {
                    return <li key={el}>{el}</li>;
            })}
            </ol>
        </div>
        
        );
}

export default Navbar;