import React from "react";
let validator = require('validator');

class User extends React.Component {
    state = {
        validemail: false
    }
    submitUser = (e) => {
        e.preventDefault();
        let name = e.target.elements.name.value;
        let email = e.target.elements.email.value;
        let info = [name, email];
        this.props.getName(info);
    }
    checkEmail = (e) => {
        let email = validator.isEmail(e.target.value); 
        //console.log(email);
        if (email) {
            this.setState(() => {
                return {validemail: false};
            });
        }
    }

  

    render() {
        let style = {
            marginLeft: "auto",
            marginRight: "auto",
            display: "table",
            paddingTop: 250
        }
        return (
            <div>
                <form style={style} onSubmit={this.submitUser}>
                    Name: <input name="name"/>
                    E-mail: <input name="email" onChange={this.checkEmail}/>
                    <button disabled={this.state.validemail}>Start Game</button>
                </form>


            </div>
        );
    }
}


export { User }