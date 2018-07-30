import React from "react";



class User extends React.Component {
    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
       }
       
    
    test(e) {
        e.preventDefault();
        let name = e.target.elements.name.value;
        let email = e.target.elements.email.value;
        let info = [name, email];
        this.props.getName(info);
    }

  

    render() {
        return (
            <div>
                <form onSubmit={this.test}>
                    Name: <input name="name"/>
                    E-mail: <input name="email"/>
                    <button>Start Game</button>
                </form>


            </div>
        );
    }
}


export { User }