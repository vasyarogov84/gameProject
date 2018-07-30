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
            <p>Best Time:{Math.min.apply(null,props.allTimes)}</p>
        </div>
        
        );
}

export default Navbar;