import React from "react";
let validator = require('validator');

class User extends React.Component {
    state = {
        message: true,
        email: false,
        name: false,
        validEmail: true
        
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
                return { name: true }
            });
        } else {
            this.setState({name : false})
        }
    }
    checkEmail = (e) => {
        
        let email = e.target.value;
        let emailChecker = false;
        if (this.props.finalTableOfPlayers.length !== 0) {
            emailChecker = this.props.finalTableOfPlayers.some((el) => {
                return el[0][1] === email;
            });
        }

        

        if (emailChecker) {
            this.setState({
                validEmail: false,
                email: false
             });
        } else {
            this.setState({
                validEmail: true,
                email: true
            });
        }

        if (validator.isEmail(email)) {

            this.setState({ email: true });
        } else {
            this.setState({ email: false });
        }

    }






    
    

    check = () => {
        if (this.state.email && this.state.name && this.state.validEmail) {
            
            return false;
        } return true;
    }
  

    render() {
        console.log(this.props);
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
                    {!this.state.validEmail && <p style={{"color":"red"}}>Email already used by other Player</p>}
                </form>


            </div>
        );
    }
}


export { User }