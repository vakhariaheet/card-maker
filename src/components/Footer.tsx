
const Footer = () => {
	return (
		<footer className='bg-gray-100 py-6 mt-20'>
			<div className='container mx-auto px-4'>
				<div className='flex justify-center items-center gap-2 text-gray-600'>
					<p className='flex gap-1 items-center'>
						Created and Designed by{' '}
						<a href='#'>	
							<img
								src='/assets/webbound.png'
								className='w-auto h-3'
								alt='WebBound'
							/>
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
