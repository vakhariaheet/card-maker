import {
	Phone,
	Mail,
	Scale,
	QrCode,
	UserPlus,
	MessageSquare,
} from 'lucide-react';
import { QrCodePopover } from '@/components/QrCodePopover';
import { InquiryDialog } from '@/components/InquiryDialog';
import { Button } from '@/components/ui/button';

const Index = () => {
	return (
		<div className=''>
			<div className='min-h-screen flex flex-col items-center'>
				{/* Header Section */}
				<header className='w-full py-20 px-4 text-center bg-[#1A1F2C] relative'>
					<div className='max-w-screen-xl mx-auto'>
						<h1 className='text-5xl md:text-6xl font-bold mb-4 text-white tracking-wide'>
							Jignesh G patel
						</h1>
						<p className='text-gray-300 text-xl mb-3'>Owner</p>
						<p className='text-3xl text-white font-serif'>Advocate & Notary</p>
					</div>
				</header>

				{/* Logo Section */}
				<div className='relative -mt-16 mb-12'>
					<div className='w-32 h-32 rounded-full bg-[#1A1F2C] flex items-center justify-center border-4 border-white shadow-2xl'>
						<Scale className='w-16 h-16 text-[#F97316]' />
					</div>
				</div>

				{/* Actions Grid */}
				<main className='flex-1 w-full max-w-screen-xl mx-auto px-4 py-8'>
					<div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto'>
						{/* Call Button */}
						<a
							href='tel:+917990251603'
							className='flex flex-col items-center gap-4 group'
						>
							<div className='w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300'>
								<Phone className='w-10 h-10 text-[#1A1F2C]' />
							</div>
							<span className='text-lg font-medium text-[#1A1F2C]'>Call</span>
						</a>

						{/* WhatsApp Button */}
						<a
							href='https://wa.me/+917990251603'
							className='flex flex-col items-center gap-4 group'
						>
							<div className='w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									version='1.1'
									xmlnsXlink='http://www.w3.org/1999/xlink'
									className='w-10 h-10 text-[#1A1F2C]'
									x={0}
									y={0}
									viewBox='0 0 682 682.667'
									xmlSpace='preserve'
									
								>
									<g>
										<path
											fillRule='evenodd'
											d='M544.387 93.008C484.512 33.063 404.883.035 320.05 0 145.246 0 2.98 142.262 2.91 317.113c-.024 55.895 14.577 110.457 42.331 158.551L.25 640l168.121-44.102c46.324 25.27 98.477 38.586 151.55 38.602h.134c174.785 0 317.066-142.273 317.132-317.133.036-84.742-32.921-164.418-92.8-224.36zM320.05 580.94h-.11c-47.296-.02-93.683-12.73-134.16-36.742l-9.62-5.715-99.766 26.172 26.628-97.27-6.27-9.972c-26.386-41.969-40.32-90.476-40.296-140.281.055-145.332 118.305-263.57 263.7-263.57 70.406.023 136.59 27.476 186.355 77.3s77.156 116.051 77.133 186.485C583.582 462.69 465.34 580.94 320.05 580.94zm144.586-197.418c-7.922-3.968-46.883-23.132-54.149-25.78-7.258-2.645-12.547-3.962-17.824 3.968-5.285 7.93-20.469 25.781-25.094 31.066-4.625 5.29-9.242 5.953-17.168 1.985-7.925-3.965-33.457-12.336-63.726-39.332-23.555-21.012-39.457-46.961-44.082-54.89-4.617-7.938-.04-11.813 3.476-16.173 8.578-10.652 17.168-21.82 19.809-27.105 2.644-5.29 1.32-9.918-.664-13.883-1.977-3.965-17.824-42.969-24.426-58.84-6.437-15.445-12.965-13.36-17.832-13.601-4.617-.231-9.902-.278-15.187-.278-5.282 0-13.868 1.98-21.133 9.918-7.262 7.934-27.73 27.102-27.73 66.106s28.394 76.683 32.355 81.972c3.96 5.29 55.879 85.328 135.367 119.649 18.906 8.172 33.664 13.043 45.176 16.695 18.984 6.031 36.254 5.18 49.91 3.14 15.226-2.277 46.879-19.171 53.488-37.68 6.602-18.51 6.602-34.374 4.617-37.683-1.976-3.304-7.261-5.285-15.183-9.254zm0 0'
											fill='currentColor'
											opacity={1}
											
										/>
									</g>
								</svg>
							</div>
							<span className='text-lg font-medium text-[#1A1F2C]'>
								WhatsApp
							</span>
						</a>

						{/* Email Button */}
						<a
							href='mailto:jignesh90087@gmail.com'
							className='flex flex-col items-center gap-4 group'
						>
							<div className='w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300'>
								<Mail className='w-10 h-10 text-[#1A1F2C]' />
							</div>
							<span className='text-lg font-medium text-[#1A1F2C]'>Email</span>
						</a>

						{/* QR Code Button */}
						<QrCodePopover>
							<div className='flex flex-col items-center gap-4 group cursor-pointer'>
								<div className='w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300'>
									<QrCode className='w-10 h-10 text-[#1A1F2C]' />
								</div>
								<span className='text-lg font-medium text-[#1A1F2C]'>
									QR Code
								</span>
							</div>
						</QrCodePopover>

						{/* Save Contact Button */}
						<a
							href='https://vcf.fyi/e712ad13'
							className='flex flex-col items-center gap-4 group'
							download='contact.vcf'
						>
							<div className='w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300'>
								<UserPlus className='w-10 h-10 text-[#1A1F2C]' />
							</div>
							<span className='text-lg font-medium text-[#1A1F2C]'>
								Save Contact
							</span>
						</a>

						{/* Inquiry Button */}
						<InquiryDialog>
							<div className='flex flex-col items-center gap-4 group cursor-pointer'>
								<div className='w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-gray-100 group-hover:border-[#1A1F2C] transition-all duration-300'>
									<MessageSquare className='w-10 h-10 text-[#1A1F2C]' />
								</div>
								<span className='text-lg font-medium text-[#1A1F2C]'>
									Inquiry
								</span>
							</div>
						</InquiryDialog>
					</div>
				</main>
			</div>
			<footer className='bg-[#28439Bff] h-[50px]'>
				<div className='h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='h-full flex items-center justify-between'>
						<div className='flex items-center space-x-4'>
							<p className='text-xs text-indigo-100'>
								© {new Date().getFullYear()} Webbound. All rights reserved.
							</p>
						</div>

						<div className='flex items-center space-x-4'>
							<Button
								variant='secondary'
								size='sm'
								className='bg-white text-[#28439Bff] hover:bg-indigo-50 transition-colors duration-200'
								asChild
							>
								<a href='https://wa.link/5bwncp'>Get Your Digital Card</a>
							</Button>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Index;
