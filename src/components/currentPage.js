import React, { Component } from 'react';
import Header from './header';
import Users from './users';
import Posts from './posts';
import Details from './postDetails';

class Page extends Component {
	constructor(){
		super();
		this.state = {
			currentPage: 'users'
		}
		this.handleChange = this.handleChange.bind(this);
		this.getDetails = this.getDetails.bind(this);
	}

	handleChange(page) {
		this.setState({
			currentPage: page
		});
	}

	getDetails = (newPage) => {
		this.setState({currentPage: newPage})
	}

	render(){
		var allusers;
		if(this.state.currentPage == 'users'){
			allusers = <Users currentPage={this.state.currentPage} />;
		}

		var allposts;
		if(this.state.currentPage == 'posts'){
			allposts = <Posts currentPage={this.state.currentPage} getDetails={this.getDetails}/>;
		}

		var details;
		if(this.state.currentPage == 'details'){
			details = <Details currentPage={this.state.currentPage} />;
		}

		return(
			<div>
				<Header currentPage={this.state.currentPage} change={this.handleChange} />
				{allusers}
				{allposts}
				{details}
			</div>
		);
	}
}

export default Page;