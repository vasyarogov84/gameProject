import React from "react";
let validator = require('validator');

class User extends React.Component {
    state = {
        message: true,
        email: false,
        name: false
        
    }
    submitUser = (e) => {
        e.preventDefault();
        let name = e.target.elements.name.value;
        let email = e.target.elements.email.value;
        let info = [name, email];
        this.props.getName(info);
        
    }
    checkName = (e) => {
        let name = e.target.value;

        if (name) {
            this.setState(() => {
                return {name: true}
            });
        }
    }
    checkEmail = (e) => {
        let email = e.target.value;
        if (validator.isEmail(email)) {
            this.setState({email: true});
        }
    }

    check = () => {
        if (this.state.email && this.state.name) {
            
            return false;
        } return true;
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
                    Name: <input name="name" onChange={this.checkName}/>
                    E-mail: <input name="email" onChange={this.checkEmail}/>
                    <button disabled={this.check()}>Start Game</button>
                    {this.state.message && <p>Please Enter Valid Entries. If Start Game button stay disabled, please enter another e-mail address.</p>}
                    
                </form>


            </div>
        );
    }
}


export { User }