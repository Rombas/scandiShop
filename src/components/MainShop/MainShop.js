import React from 'react'
import { categoryQuery } from '../../api/api';
import Header from '../Header/Header'
import PDP from '../PDP/PDP';
import ProductCards from '../ProductCards/ProductCards'

class MainShop extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			products: [],
			active: 'tech',
			isNavbar: false,
			currentCurrency: 'USD',
			page: 'category',
			selectedItem: undefined,
			cart:{}
		}
		this.categoryClick = this.categoryClick.bind(this);
		this.isNavbarChange = this.isNavbarChange.bind(this);
		this.currencyChange = this.currencyChange.bind(this);
		this.onItemClick = this.onItemClick.bind(this);
		this.returnButtonClick = this.returnButtonClick.bind(this);
		this.addToCart = this.addToCart.bind(this);
	}
	
	componentDidMount() {
		const {data} = this.props;
		categoryQuery(data, "tech").then(res => this.setState(res));
		const currency = localStorage.getItem('currentCurrency') || 'USD';
		this.setState({currentCurrency: currency});
	}
	
	isNavbarChange(){
		this.setState({isNavbar: !this.state.isNavbar})
	}

	currencyChange(currency){
		this.setState({currentCurrency: currency});
		this.isNavbarChange();
		localStorage.setItem('currentCurrency', currency);
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
	onItemClick(id){
		this.setState({page: 'item', selectedItem: id});
	}
	returnButtonClick(){
		this.setState({page: 'category'});
	}
	addToCart(){
		this.setState({cart:{
			
		}})
	}

	render(){
		return(
			<div className="App">
	    		<Header 
					categoryClick={this.categoryClick} 
					active={this.state.active} 
					isNavbar={this.state.isNavbar} 
					currentCurrency={this.state.currentCurrency}
					isNavbarChange = {this.isNavbarChange}
					currencyChange = {this.currencyChange}
					returnButtonClick = {this.returnButtonClick}
				/>
     			<h1>{this.state.name}</h1>
				{(this.state.page ==='category') &&
     			< ProductCards 
				 	state={this.state}
					onItemClick = {this.onItemClick}	  
				/>
				}
				{(this.state.page ==='item') &&
     			<PDP 
				 	product={this.state.products[this.state.selectedItem]}
					currentCurrency={this.state.currentCurrency} 
				/>
				}
    </div>
		)
	}
}

export default MainShop