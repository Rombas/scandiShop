import React from 'react';
import HeaderCategories from '../HeaderCategories/HeaderCategories';
import logo from '../../images/brand.svg'
import emptyCart from '../../images/emptyCart.svg'
import './Header.css'
import NavbarHOC from '../Navbar/NavbarHOC';

class Header extends React.Component {
	render(){
		return(
			<div className='header'>
				< HeaderCategories categoryClick={this.props.categoryClick} active={this.props.active} />
				<img src={logo} alt='logo' onClick={() => this.props.returnButtonClick()}/>
				<span>
					<NavbarHOC 
						isNavbar={this.props.isNavbar} 
						currentCurrency={this.props.currentCurrency}
						isNavbarChange = {this.props.isNavbarChange}
						currencyChange = {this.props.currencyChange}
					/>
					<img src={emptyCart} alt='emptyCart'/>
				</span>
				
			</div>
		)
	}
}

export default Header;