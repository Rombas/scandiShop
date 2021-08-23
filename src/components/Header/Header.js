import React from 'react';
import HeaderCategories from '../HeaderCategories/HeaderCategories';
import logo from '../../images/brand.svg'
import emptyCart from '../../images/emptyCart.svg'
import './Header.css'

class Header extends React.Component {
	render(){
		return(
			<div className='header'>
				< HeaderCategories />
				<img src={logo} alt='logo'/>
				<span>
					$✓
					<img src={emptyCart} alt='emptyCart'/>
				</span>
				
			</div>
		)
	}
}

export default Header;