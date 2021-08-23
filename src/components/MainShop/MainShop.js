import React from 'react'
import { categoryQuery } from '../../api/api';
import Header from '../Header/Header'
import ProductCards from '../ProductCards/ProductCards'

class MainShop extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			products: [],
			active: 'tech'
		}
		this.categoryClick = this.categoryClick.bind(this);
	}
	
	componentDidMount() {
		const {data} = this.props;
		categoryQuery(data, "tech").then(res => this.setState(res));
	}
	
	categoryClick(category) {
		if (this.props) {
			this.setState({active: category})
			const { data = {} } = this.props;
			categoryQuery(data, category).then(res => {
				this.setState(res);
			});
		}
	}
	
	render(){
		return(
			<div className="App">
	    		< Header categoryClick={this.categoryClick} active={this.state.active} />
     			<h1>{this.state.name}</h1>
     			< ProductCards state={this.state} />
    </div>
		)
	}
}

export default MainShop