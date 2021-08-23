import React from 'react';
import './ProductCards.css'

class ProductCards extends React.Component {
	state = {
		products:[]
	}
	
	componentDidMount(){
		const { data } = this.props;
		data.fetchMore({
			variables: {
				"category": {
					"title": "tech"
				}
			},
			// updateQuery: (previousResult, {fetchMoreResult}) => fetchMoreResult
		}).then((res) => {
			this.setState(res.data.category)
		})
	}

	render(){
		console.log(this.state.products);
		const { products = [] } = this.state;
		console.log(products);
		return(
			<div className='products'>
				{products.map((product, i) => {
					return(
					<span className='productWrapper' key={i}>
						<div>
							<img className='productImage' src={product.gallery[0]} alt={product.name}/>
						</div>
						<div>{product.name}</div>
						<div>{product.prices[0].amount} {product.prices[0].currency}</div>
					</span>
				)
			})}
			</div>
		)
	}
}

export default ProductCards;