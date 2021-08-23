import { graphql } from 'react-apollo';
import React from 'react';
import { categoriesQuery } from './queries';
import './HeaderCategories.css'

class HeaderCategories extends React.Component{
	componentDidMount(){
	}
	render() {
		const { categories = [] } = this.props.data;
		return(
			<span> {
				categories.map((category, i) => 
					< button className={this.props.active === category.name ? 'catButton active': 'catButton'}
					key = {i}
					onClick = {() =>
						this.props.categoryClick(category.name)
					} >
						{category.name} 
					</button>)
			}</span >
		)
	}
}

export default graphql(categoriesQuery)(HeaderCategories);