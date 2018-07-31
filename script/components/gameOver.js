import React from 'react';


export default class GameOver extends React.Component {
    constructor(props) {
        super(props);
     }
    
    render() {
        let style = {
            marginLeft: "auto",
            marginRight: "auto",
            display: "table",

        }
        return (
            <div style={{ paddingTop: 250 }}>
                <button style={style} onClick={this.props.newGame}>Start Over</button>
                <button
                    style={style}
                    onClick={this.props.startWithNewUser}
                >Start As New Player</button>
            </div>
        );
    }
}