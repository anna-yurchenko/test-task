import React, { Component } from 'react';

class Header extends Component {
	constructor() {
		super();
		this.change = this.change.bind(this);
	}

	change(page) {
		this.props.change(page);
	}

	render(){
		return(
			<div>
				<ul className="header">
					<li><a className="menuItem" onClick={this.change.bind(this,'users')} href="#">Users</a></li>
					<li><a className="menuItem" onClick={this.change.bind(this,'posts')} href="#">Posts</a></li>
				</ul>
			</div>
		);
	}
}

export default Header;