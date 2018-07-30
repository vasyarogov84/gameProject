import React from 'react';


let Navbar = (props) => {
    console.log(props);
    return (
        <div style={{"float":"right"}}>
            <ol>
                {props.user.map((el) => {
                    return <li key={el}>{el} {props.currentTime}</li>;
            })}
            </ol>
        </div>
        
        );
}

export default Navbar;