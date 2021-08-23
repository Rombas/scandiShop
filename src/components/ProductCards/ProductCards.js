import React from 'react';
import './ProductCards.css'

class ProductCards extends React.Component {

	render(){
		const { products = [] } = this.props.state;
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