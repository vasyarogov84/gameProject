import React, { Component } from "react";
import ReactDOM from "react-dom";
import { User } from "./components/user"
import Navbar from "./components/navbar";
import GameComponent from "./components/GameComponent";


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            navbar: false,
            userInfo: true,
            userTime: []
        }
        this.getName = this.getName.bind(this);
        this.setTime = this.setTime.bind(this);
    }


    getName(player) {
        this.setState({
            players: [...this.state.players, player],
            navbar: true,
            userInfo: false
        });
    }

    setTime(time) {
        this.setState({ userTime: [...this.state.userTime, time] });
        //console.log(this.state.userTime);
    }
    render() {
        return (

            <div>
                <div>
                    {this.state.navbar &&
                        <Navbar
                            user={this.state.players}
                            currentTime={this.state.userTime[this.state.userTime.length - 1]}
                        />}
                </div>
                <div>
                    {this.state.userInfo && <User getName={this.getName} />}
                    {!this.state.userInfo &&
                        <GameComponent
                            date={new Date()}
                            setTime={this.setTime}
                        />
                    }
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Game />, document.getElementById("app"));



