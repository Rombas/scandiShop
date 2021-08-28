import React from 'react';
import './Attributes.css'

class Attributes extends React.Component{
	constructor(props){
		super(props);
		this.state = {}
	}

	attrClick(id, value){
		this.setState({[id] : value})
	}

	componentDidMount(){
		const attrs = this.props.attributes;
		attrs.map((attr, i) => this.setState({[attr.id] : attr.items[0].displayValue}))
	}

	render(){
		const attrs = this.props.attributes;
		return(
			<div>
				{attrs.map((attr, i) => {
					return (
					<div key={i}>
						<h2>{attr.name}:</h2>
						{attr.type === 'swatch' &&
							<span className='bar'>
							{attr.items.map((item, i) => {
								return(
										<span 
											key={i} 
											className={this.state[attr.id] === item.displayValue ? 'active-attr': ''}
											onClick={() => this.attrClick(attr.id, item.displayValue)}	
										>
											<div style={{backgroundColor: item.value, color: item.value}}>____</div>
											<span>{item.displayValue}</span>
										</span>
								)
							})}
							</span>
						}
						{attr.type === 'text'&&
							<span className='bar'>
							{attr.items.map((item, i) => {
								return(
										<span 
											key={i} 
											className={this.state[attr.id] === item.displayValue ? 'active-attr': ''}
											onClick={() => this.attrClick(attr.id, item.displayValue)}	
										>
											<div>{item.value}</div>
										</span>
								)
							})}
							</span>
						}	
					</div>)
				})}
			</div>
		)
	}
}

export default Attributes;