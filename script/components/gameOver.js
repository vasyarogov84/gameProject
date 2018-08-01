import React from 'react';
import Modal from "react-modal";


export default class GameOver extends React.Component {
   

    render() {
        let style = {
            marginLeft: "auto",
            marginRight: "auto",
            display: "table",

        }
        console.log(this.props);
        
        return (
            
            <Modal isOpen={true} contentLabel="Standing"> 
                <div style={style}>
                   Current Player: {this.props.currentPlayer[0][0]}{this.props.currentPlayer[1]}
                <div style={style}>
                    <ol>
                        {this.props.finalTableOfPlayers.sort((a,b) => {
                            return a[1] - b[1] }).map((el, ind) => {
                            return <li key={el}>{el[0][0]}({el[1]})</li>
                        })}
                    </ol>
                </div>

                <div style={{ paddingTop: 250 }}>
                    <button style={style} onClick={this.props.newGame}>Start Over</button>
                    <button
                        style={style}
                        onClick={this.props.startWithNewUser}
                    >Start As New Player</button>
                </div>
            </div>
</Modal>
        );
    }
}