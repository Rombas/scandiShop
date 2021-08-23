import { graphql } from 'react-apollo';
import React from 'react';
import { categoriesQuery } from './queries';
import './HeaderCategories.css'

class HeaderCategories extends React.Component{
	componentDidMount(){
	}
	render() {
		console.log('Render')
		const { categories = [] } = this.props.data;
		console.log(categories);
		return(
			<span>{categories.map((category, i) => <a key={i}>{category.name}</a>)}</span>
		)
	}
}

export default graphql(categoriesQuery)(HeaderCategories);