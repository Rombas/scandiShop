import React from 'react'
import Attributes from '../Attributes/Attributes';
import './PDP.css'

class PDP extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			imageNumber: 0,
			cart:{}
		}
		this.imageClick = this.imageClick.bind(this);
	}
	
	imageClick(num){
		this.setState({imageNumber: num})
	}
	createMarkup(description) {
 		return {__html: description};
	}
	
	render(){
		const { gallery, attributes, name, prices, description, brand } = this.props.product;
		return(
			<div className='pdp-wrapper'>
				<div className='gallery-wrapper'>
					{gallery.map((item, i) => 
						<img src={item} alt={name} key={i} onClick={()=>this.imageClick(i)}></img>)}
				</div>
				<img src={gallery[this.state.imageNumber]} alt={name}></img>
				<span>
					<h2>{name}</h2>
					<div>{brand}</div>
					<Attributes attributes={attributes}/>
					<h2>Price:</h2>
					{prices.map((price, i) => {
						if (price.currency === this.props.currentCurrency) 
						return <h2 key={i}>{price.amount} {price.currency}</h2>
						return null;
					})}
					<button className='add-button'>ADD TO CART</button>
					<div dangerouslySetInnerHTML={this.createMarkup(description)}></div>
				</span>
			</div>
		)
	}
} 

export default PDP;