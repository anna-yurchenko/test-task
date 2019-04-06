import React, {Component} from 'react';

class Users extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            this.setState({data: data})
        })
        .catch(error => console.error(error))
    }

    render(){
        var userData = [];
        for(let i=0; i<this.state.data.length; i++){
            userData.push(
                <div>
                    <p className="userName" key={this.state.data[i].name}>{this.state.data[i].name}</p>
                    <p className="userData" key={this.state.data[i].username}>Username: {this.state.data[i].username}</p>
                    <p className="userData" key={this.state.data[i].email}>Email: {this.state.data[i].email}</p>
                    <p className="userData">Address:</p>
                </div>
            )
            for(let key in this.state.data[i].address){
                if(key !== 'geo'){
                    userData.push(
                        <p className="userAddress" key={this.state.data[i].address[key]}>{key}: {Object.values(this.state.data[i].address[key])}</p>
                    )
                }
            }
        }  
     
        return(
            <div>
                {userData}
            </div>
        )
    }
}

export default Users;