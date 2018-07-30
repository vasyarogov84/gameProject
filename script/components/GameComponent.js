import React from "react";


export default class GameComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundColor: "green",
                borderRadius: "50%",
                width: 40,
                height: 40,
                marginLeft: 40,
                marginTop: 4,
            },
            timeToStartFrom: 0
        }
        this.changeFigure = this.changeFigure.bind(this);
        this.getColor = this.getColor.bind(this);
    }
    getColor() {
        let characters = "1234567890ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += characters[Math.floor(Math.random()*16)]
        }
        console.log(this.props);
        return color;
     }
    

    changeFigure() {
        let newDate = new Date();
        

            
                console.log((newDate - this.props.date) / 1000);
                
                console.log((newDate - this.state.timeToStartFrom) / 1000);
            
       
        
        this.setState({
            style: {
                backgroundColor: this.getColor(),
                borderRadius: Math.floor(Math.random() * 50),
                width: Math.floor(Math.random() * 30 + 30),
                height: Math.floor(Math.random() * 30 + 30),
                marginLeft: Math.floor(Math.random() * 230 + 230),
                marginTop: Math.floor(Math.random() * 230 + 230)
            },
            timeToStartFrom: newDate
        });
    }

    render() {
        let date = new Date();
        return (
            <div style={this.state.style} onClick={this.changeFigure}></div>
            );
    }
}