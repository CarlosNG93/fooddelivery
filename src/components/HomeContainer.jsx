import React from 'react';
import Delivery from '../assets/delivery.png';
import HeroBg from '../assets/heroBg.png';

const HomeContainer = () => {
  return (
	<section 
		className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'
		id="home"
	>
		<div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
			<div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
				<p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
				<div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
					<img 
						src={Delivery} 
						className='w-full h-full object-contain' 
						alt="delivery" 
					/>
				</div>
			</div>
			<p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
				The Fastest Delivery in{" "} 
				<span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
			</p>

			<p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero perferendis suscipit reprehenderit tenetur quaerat non unde saepe sit at voluptate, fugit iusto, laborum molestiae debitis, nulla voluptatibus necessitatibus sint?
			</p>
			<button 
				type="button"
				className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'
			>
				Order Now
			</button>
		</div>
		<div className='py-2 flex-1 flex items-center relative'>
			<img src={HeroBg} className='ml-auto h-420 w-full lg:w-auto lg:h-650' alt="hero-bg" />

			<div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap'>

			</div>
		</div>
	</section>
  )
}

export default HomeContainer;