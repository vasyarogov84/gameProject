import React from "react";



class User extends React.Component {
    constructor(props) {
        super(props);
        this.submitUser = this.submitUser.bind(this);
       }
       
    
    submitUser(e) {
        e.preventDefault();
        let name = e.target.elements.name.value;
        let email = e.target.elements.email.value;
        let info = [name, email];
        this.props.getName(info);
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
                    E-mail: <input name="email"/>
                    <button>Start Game</button>
                </form>


            </div>
        );
    }
}


export { User }