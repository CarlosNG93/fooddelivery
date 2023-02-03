import React from 'react';
import Logo from './assets/logo.png';

const Header = () => {
	return (
		<header className='fixed z-50 w-screen p-6 px-16'>
			{/* DESKTOP & TABLET */}
			<div className='hidden md:flex w-full'>
				<div className='flex items-center gap-2'>
					<img src={Logo} className="w-8 object-cover" alt="logo" />
					<p className="text-headingColor text-xl font-bold">City</p>

					<ul className=''>
						<li>Home</li>
						<li>Menu</li>
						<li>About Us</li>
						<li>Service</li>
					</ul>
				</div>
			</div>


			{/* MOBILE */}
			<div className='flex md:hidden w-full h-full'></div>
		</header>
	)
}

export default Header;