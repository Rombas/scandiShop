import { graphql } from 'react-apollo';
import React from 'react';
import { categoriesQuery } from './queries';
import { compose } from 'recompose'

class HeaderCategories extends React.Component{
	componentDidMount(){
		console.log(this.props.data.categories)
	}
	render() {
		
		return(
			<div>Categories</div>
		)
	}
}

export default graphql(categoriesQuery)(HeaderCategories);