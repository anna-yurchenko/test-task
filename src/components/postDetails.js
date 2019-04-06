import React, {Component} from 'react';

class Details extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(response => response.json())
        .then(data => {
            this.setState({data: data})
        })
        .catch(error => console.error(error))
    }

    render(){
        var detailsData = [];
        for(let i=0; i<this.state.data.length; i++){
            detailsData.push(
                <div>
                    <p className="postTitle" key={this.state.data[i].name}>{this.state.data[i].name.charAt(0).toUpperCase() + this.state.data[i].name.slice(1)}</p>
                    <p className="postBody" key={this.state.data[i].email}>{this.state.data[i].email}</p>
                    <p className="postBody" key={this.state.data[i].body}>{this.state.data[i].body.charAt(0).toUpperCase() + this.state.data[i].body.slice(1)}</p>
                </div>
            )
        }

        return(
            <div>
                {detailsData}
            </div>
        );
    }
}

export default Details;