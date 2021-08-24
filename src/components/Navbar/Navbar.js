import React from 'react'
import './Navbar.css'

class Navbar extends React.Component{
	
	render(){
		const {currencies = []} = this.props.data;
		if (this.props.isNavbar){
			return(
					<span>
						<span className='navbar-nav'>{this.props.currentCurrency}▼</span>
		
						<ul className='navbar'>
							{currencies.map((item, i) => 
							<li key={i} className='navbar-nav' onClick={()=>{this.props.currencyChange(item)}}>
								{item}
							</li>)}
						</ul>
					</span>
			)
		} else {
			return(
				<span onClick={() =>{this.props.isNavbarChange()}} className='navbar-nav'>{this.props.currentCurrency}▼</span>
			)
		}
	}
}

export default Navbar;