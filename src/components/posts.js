import React, {Component} from 'react';

class Posts extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            currentPage: 'details'
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(data => {
            this.setState({data: data})
        })
        .catch(error => console.error(error))
    }

    render(){
        var postsData = [];
        for(let i=0; i<this.state.data.length; i++){
            postsData.push(
                <div>
                    <p className="postTitle" key={this.state.data[i].title}>{this.state.data[i].title.charAt(0).toUpperCase() + this.state.data[i].title.slice(1)}</p>
                    <p className="postBody" key={this.state.data[i].body}>{this.state.data[i].body.charAt(0).toUpperCase() + this.state.data[i].body.slice(1)}</p>
                    <p className="detailsButton" onClick={() => {this.props.getDetails(this.state.currentPage)}} >Details</p>                 
                </div>
            )
        }

        return(
            <div>
                {postsData}
            </div>
        );
    }
}

export default Posts;