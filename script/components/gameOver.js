import React from 'react';


export default class GameOver extends React.Component {
    constructor(props) {
        super(props);
        this.startAgain = this.startAgain.bind(this);
    }
    startAgain() {
        this.props.newGame();
    }

    render() {
        return (
            <div>
                <button onClick={this.startAgain}>Start Over</button>
                <button>Start As New Player</button>
            </div>
        );
    }
}