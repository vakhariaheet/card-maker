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
									className='w-10 h-10'
									x={0}
									y={0}
									viewBox='0 0 512 512'
									xmlSpace='preserve'
									fillRule='evenodd'
								>
									<g>
										<path
											fill='#39ae41'
											d='M317.12 285.93c-9.69 3.96-15.88 19.13-22.16 26.88-3.22 3.97-7.06 4.59-12.01 2.6-36.37-14.49-64.25-38.76-84.32-72.23-3.4-5.19-2.79-9.29 1.31-14.11 6.06-7.14 13.68-15.25 15.32-24.87 3.64-21.28-24.18-87.29-60.92-57.38C48.62 232.97 330.7 461.46 381.61 337.88c14.4-35.03-48.43-58.53-64.49-51.95zM256 467.28c-37.39 0-74.18-9.94-106.39-28.76-5.17-3.03-11.42-3.83-17.2-2.26l-69.99 19.21 24.38-53.71a22.34 22.34 0 0 0-2.22-22.32C58.5 343.29 44.71 300.61 44.71 256c0-116.51 94.78-211.29 211.29-211.29S467.28 139.49 467.28 256c0 116.5-94.78 211.28-211.28 211.28zM256 0C114.84 0 0 114.84 0 256c0 49.66 14.1 97.35 40.89 138.74L2 480.39a22.37 22.37 0 0 0 3.34 23.76A22.403 22.403 0 0 0 22.36 512c14.42 0 93.05-24.71 113.06-30.2C172.41 501.59 213.9 512 256 512c141.15 0 256-114.85 256-256C512 114.84 397.15 0 256 0z'
											opacity={1}
											data-original='#39ae41'
										/>
										<path
											fill='#00aae1'
											d='M-3363.21-412.9c-70.96-2.28-119.03 37.77-144.21 120.23 34.58-14.87 77.7-15.28 72.37 35.5-2.37 27.49-55.62 128.12-82.74 128.12-33.35 0-54.38-168.76-58.63-195.67-9.21-58.32-33.73-85.56-73.57-81.73-37.2 3.41-118.7 84.62-150.6 112.64l24.1 31.05c22.95-16.06 36.36-24.14 40.17-24.14 65.6 0 64.49 316.97 166.39 316.97 101.61 0 276.65-243.4 281.09-340.54 3.03-66.74-21.76-100.85-74.37-102.43z'
											opacity={1}
											data-original='#00aae1'
										/>
										<path
											fill='#d31f61'
											d='M-2634.66-204.95c-5.2-12-10.61-23.98-16.38-35.83 49.27-21.34 88.87-50.32 118.37-87.07 28.78 34.01 46.85 77.19 49.52 124.47-54.93-8.99-105.46-9.49-151.51-1.57zm58.01 189.27c-9.34-50.18-23.05-99.25-40.95-147.12 40.01-5.66 84.06-4.19 132.23 4.19-9.31 59.43-43.24 110.77-91.28 142.93zm-247.16-9.16c42-65.89 95.63-108.78 162.08-128.58 19.78 51.63 34.33 104.74 43.59 159.14-69.22 26.75-147 15.26-205.67-30.56zm-81.41-172.07c82.09-.12 152.91-9.55 212.25-28.22 4.97 10.13 9.73 20.3 14.29 30.56-72.08 22.52-131.49 68.71-177.84 138.23-33.36-40.03-49.96-88.59-48.7-140.57zm115.78-183.03c28.41 37.17 53.56 75.49 75.45 114.81-51.85 15.26-113.72 23.1-185.27 23.59 14.78-60.48 55.51-110.78 109.82-138.4zm224.33 21.22c-25.7 33.14-61.18 59.35-106.38 78.49-21.67-39.69-46.43-78.41-74.4-115.99 63.32-16.15 128.82-2.63 180.78 37.5zm-128.92-88.74c-141.38 0-256 114.61-256 256 0 141.38 114.62 256 256 256 141.39 0 256-114.62 256-256 0-141.39-114.61-256-256-256z'
											opacity={1}
											data-original='#d31f61'
										/>
										<path
											fill='#3acd01'
											fillRule='nonzero'
											d='M-1902.61-430.97c141.38 0 256 91.77 256 204.99 0 136.27-254.05 288.28-273.65 272.96-16.83-13.15 29.27-63.1-27.31-71.13-102.97-14.71-211.04-87.99-211.04-201.83 0-113.22 114.62-204.99 256-204.99zm-147.42 270.37h50.52c7.34 0 13.35-6.01 13.35-13.35 0-7.92-5.05-14.47-13.35-14.47h-37.17v-84.55c0-7.35-6-13.36-13.35-13.36-7.91 0-14.46 5.05-14.46 13.36v99.02c0 8.29 6.54 13.35 14.46 13.35zm318.82-62.07c0-7.91-5.05-14.46-13.35-14.46h-37.17v-21.14h37.17c7.34 0 13.35-6.01 13.35-13.35 0-7.92-5.05-14.47-13.35-14.47h-50.52c-7.92 0-14.46 5.05-14.46 13.36v99.01c0 7.35 6 13.36 13.35 13.36h51.63c7.34 0 13.35-6.01 13.35-13.36 0-7.91-5.05-14.46-13.35-14.46h-37.17v-21.14h37.17c7.34.01 13.35-6 13.35-13.35zm-95.43 48.72v-99.02c0-7.35-6.01-13.35-13.35-13.35-7.92 0-14.47 5.04-14.47 13.35v58.13l-48.25-64.73c-2.31-4.02-6.65-6.75-11.6-6.75-7.91 0-14.46 5.04-14.46 13.35v99.02c0 8.31 6.55 13.36 14.46 13.36 7.35 0 13.36-6.01 13.36-13.36v-59.21l48.6 66.38c2.55 3.95 6.43 6.18 11.24 6.18 7.95 0 14.47-5 14.47-13.35zm-134.28 13.35c7.35 0 13.35-6.01 13.35-13.35v-99.02c0-7.35-6-13.35-13.35-13.35-7.91 0-14.46 5.04-14.46 13.35v99.02c0 8.3 6.55 13.35 14.46 13.35z'
											opacity={1}
											data-original='#3acd01'
										/>
										<path
											fill='#178cc8'
											d='M-1227.78 58.09c0 3.56 2.89 6.45 6.45 6.45h91.93c3.56 0 6.44-2.89 6.44-6.45v-251.57h66.65c3.34 0 6.14-2.57 6.42-5.9l6.41-75.8a6.44 6.44 0 0 0-6.42-6.99l-73.06-.01v-53.76c0-12.61 10.22-22.83 22.82-22.83h51.37c3.56 0 6.45-2.89 6.45-6.45v-75.8c0-3.55-2.89-6.44-6.45-6.44h-86.79c-50.92 0-92.22 41.28-92.22 92.21v73.07h-45.96c-3.55 0-6.45 2.9-6.45 6.46v75.79c0 3.57 2.89 6.45 6.45 6.45h45.96z'
											opacity={1}
											data-original='#178cc8'
										/>
										<path
											fill='#904a97'
											d='M-5443.1 259.87c-94.61 4.32-144.31 57.55-148.43 148.44-3.15 68.81-3.15 141.62 0 210.43 4.12 90.89 53.82 144.11 148.43 148.43 68.82 3.13 141.61 3.13 210.43 0 90.91-4.16 144.1-53.78 148.43-148.43 3.13-68.85 3.12-141.59 0-210.43-4.24-92.65-55.78-144.21-148.43-148.44-68.82-3.13-141.61-3.13-210.43 0zm272.06 117.43c0 16.91-13.72 30.63-30.63 30.63-16.92 0-30.62-13.72-30.62-30.63s13.7-30.62 30.62-30.62c16.91 0 30.63 13.71 30.63 30.62zm-166.85 221.28c-46.98 0-85.05-38.08-85.05-85.06s38.07-85.06 85.05-85.06 85.07 38.08 85.07 85.06c0 46.97-38.09 85.06-85.07 85.06zm0-216.1c-72.36 0-131.04 58.67-131.04 131.04s58.68 131.04 131.04 131.04c72.38 0 131.05-58.67 131.05-131.04s-58.67-131.04-131.05-131.04zm103.12-76.68c68.73 3.14 101.47 35.86 104.59 104.61 3.1 67.39 3.09 138.83 0 206.23-3.2 70.72-37.64 101.55-104.59 104.6-67.42 3.07-138.82 3.07-206.24 0-66.96-3.05-101.38-33.88-104.59-104.6-3.09-67.39-3.09-138.85 0-206.23 3.04-66.98 33.87-101.37 104.59-104.61 67.41-3.07 138.83-3.08 206.24 0z'
											opacity={1}
											data-original='#904a97'
										/>
										<path
											fill='#178cc8'
											d='M-4627.14 613.29v-84.76c24.35 0 90.21-3.72 110.06 5.38 28.62 13.1 26.67 60.23-.64 73.78-19.26 9.37-85.47 5.6-109.42 5.6zm396.94-244.48h-138.18v32.09h138.18zm-65.07 109.02c31.05 0 50.75 18.94 52.87 49.81h-105.94c4.42-30.3 21.18-49.81 53.07-49.81zm2.2 198.67c45.84-.01 105.28-26.41 111.28-76.8h-62.78c-9.99 18.91-25.32 26.96-46.8 26.96-36.56 0-57.01-21.94-58.48-58.47h171.25c1.17-78.06-25.03-141.06-116.7-141.06-76.72-.01-116.45 52.83-116.45 126.29 0 74.43 42.68 123.08 118.68 123.08zm-334.07-270.74c28.08 0 81.59-3.53 106.77 4.97 22.18 9.21 22.76 45.96 4.15 57.27-20.63 12.61-84.91 7.88-110.92 7.88zm124.8 258.43c43.93-9.06 72.61-46.94 72.61-91.69 0-35.03-15.38-62.37-49.12-74.63 27.44-14.02 38.99-33.56 38.99-64.93.01-57.86-43.41-81.61-97.01-82.39l-153.69-.01v317.98c53.06 0 138.39 6.11 188.22-4.33z'
											opacity={1}
											data-original='#178cc8'
										/>
										<path
											fill='#00a055'
											d='M-3393.55 485.36c-81.92-48.63-218.88-53.76-296.96-29.44-12.8 3.85-25.6-3.83-29.44-15.35-3.84-12.8 3.84-25.6 15.36-29.44 90.88-26.89 240.64-21.77 335.36 34.55 11.52 6.41 15.36 21.77 8.96 33.28-6.4 8.97-21.76 12.8-33.28 6.4zm-2.56 71.68c-6.4 8.96-17.92 12.81-26.88 6.41-69.12-42.24-174.08-55.04-254.72-29.44-10.24 2.56-21.76-2.57-24.32-12.8-2.56-10.24 2.56-21.76 12.8-24.32 93.43-28.16 208.64-14.08 288 34.55 7.68 3.85 11.52 16.65 5.12 25.6zm-30.72 70.4c-5.12 7.69-14.08 10.25-21.76 5.13-60.16-37.12-135.68-44.8-225.28-24.32-8.96 2.55-16.64-3.84-19.2-11.53-2.56-8.95 3.84-16.64 11.52-19.19 97.28-21.76 181.76-12.8 248.32 28.15 8.96 3.85 10.24 14.08 6.4 21.76zm-117.76-369.92c-141.38 0-256 114.62-256 256.01 0 141.38 114.62 255.99 256 255.99 141.39 0 256-114.61 256-255.99 0-141.39-114.61-256.01-256-256.01z'
											opacity={1}
											data-original='#00a055'
										/>
										<path
											fill='#037aff'
											fillRule='nonzero'
											d='m-2950.03 626.51 197.74-105.93 102.4 109.46L-2438.03 397l-197.73 105.93-102.41-102.4z'
											opacity={1}
											data-original='#037aff'
										/>
										<path
											fill='#f2ea1a'
											d='M-2146.41 631.05c41.97-8.32 70.04-35.07 91.21-70.19 30.88-51.23-15.79-36.89-43.47-60.98-14.69-12.76-6-31.15 11.32-35.33 16.36-3.95 49.18 19.72 46.46-3.86-2.59-22.53-2.52-45.19-1.46-67.81 7.35-157.31 260.94-156.76 278.24-9.85 3 25.56 1.81 51.15-.21 76.74-2.17 27.52 27.95-3.83 51.62 6.57 15.06 6.62 18.98 22.34 6.27 33.41-18.17 15.81-65.68 15.66-51.76 45.07 20.07 42.43 49.57 74.66 97.29 85.85 27.66 6.46 9.63 27.77-7.77 34.36-22.85 8.68-48.26 4.36-51.94 29.46-2.01 13.69-6.14 15.63-20.1 14.51-33.63-2.71-54.97-9.94-85.38 14.61-39.47 31.81-86.42 40.3-131.59 13.95-55.4-32.31-43.3-35.38-109.16-28.14-8.3.92-16.31-1.45-16.78-10.03-1.67-30.61-31-25.02-54.94-35.03-18.43-7.7-30.18-28.88-7.85-33.31z'
											opacity={1}
											data-original='#f2ea1a'
										/>
										<path
											fill='#e7332f'
											d='m-1087.64 520.35-115.29 63.23c-5.02 2.71-9.53-.92-9.53-6.61v-129.8c0-5.77 4.65-9.39 9.67-6.54l116.08 66.56c5.13 2.93 4.26 10.34-.93 13.16zm182.38-74.57c0-61.56-49.9-111.46-111.45-111.46h-289.08c-61.56 0-111.47 49.9-111.47 111.46v135.48c0 61.56 49.91 111.46 111.46 111.46h289.09c61.55 0 111.45-49.9 111.45-111.46z'
											opacity={1}
											data-original='#e7332f'
										/>
										<path
											fill='#4a8cff'
											fillRule='nonzero'
											d='M-5593.9 1061.94v187.5c.17 42.4 34.8 76.53 77.03 76.36h273.32c7.77 0 14.02-6.25 14.02-13.85v-187.51c-.17-42.4-34.8-76.52-77.03-76.35h-273.32c-7.77 0-14.02 6.25-14.02 13.85zm381.77 73.15 112.84-82.44c9.79-8.11 17.4-6.08 17.4 8.62v251.35c0 16.73-9.29 14.7-17.4 8.62l-112.84-82.27z'
											opacity={1}
											data-original='#4a8cff'
										/>
										<path
											fill='#3a76f0'
											fillRule='nonzero'
											d='m-4496 938.35 5.76 23.28a231.455 231.455 0 0 0-64.32 26.59l-12.32-20.56a255.163 255.163 0 0 1 70.88-29.31zm117.12 23.28a231.705 231.705 0 0 1 64.32 26.59l12.4-20.56a255.174 255.174 0 0 0-70.96-29.31zm-274.88 92.91a254.526 254.526 0 0 0-29.32 70.87l23.28 5.76a231.243 231.243 0 0 1 26.6-64.31zm-10.2 97.55-23.72-3.6a256.84 256.84 0 0 0 0 76.71l23.72-3.6a232.705 232.705 0 0 1 0-69.51zm349.4 233.38a231.543 231.543 0 0 1-64.24 26.6l5.76 23.28a255.126 255.126 0 0 0 70.8-29.32zm109.4-163.87 23.72 3.6a256.84 256.84 0 0 0 0-76.71l-23.72 3.6c3.47 22.98 3.47 46.53 0 69.51zm-4.16 20.92a231.908 231.908 0 0 1-26.6 64.32l20.56 12.4a255.376 255.376 0 0 0 29.32-70.96zm-190.48 173.75a233.502 233.502 0 0 1-69.53 0l-3.59 23.72c25.43 3.84 51.29 3.84 76.72 0zm151.99-91.79a232.576 232.576 0 0 1-49.15 49.11l14.24 19.32a256.562 256.562 0 0 0 54.24-54.08zm-49.15-324.38a233.046 233.046 0 0 1 49.15 49.16l19.33-14.4a256.745 256.745 0 0 0-54.08-54.08zm-324.36 49.16a232.859 232.859 0 0 1 49.16-49.16l-14.4-19.32a256.276 256.276 0 0 0-54.08 54.08zm385.4 17.6a231.357 231.357 0 0 1 26.6 64.23l23.28-5.76a255.242 255.242 0 0 0-29.32-70.79zm-233.41-109.39c23.05-3.47 46.48-3.47 69.53 0l3.6-23.72a256.907 256.907 0 0 0-76.72 0zm-139.67 441.8-49.56 11.56 11.56-49.56-23.36-5.48-11.56 49.56c-4.06 17.3 11.54 32.89 28.84 28.84l49.52-11.36zm-56.36-64.87 23.36 5.43 8-34.35a230.507 230.507 0 0 1-25.8-62.96l-23.28 5.76a254.073 254.073 0 0 0 23.6 60.84zm77.64 59.99 5.44 23.36 25.28-5.88a254.073 254.073 0 0 0 60.84 23.6l5.76-23.28a231.047 231.047 0 0 1-62.8-25.96zm-28.81-308.09c-36.59 66.25-34.31 147.14 5.97 211.22l-20 85.31 85.32-20c74.83 47.13 171.29 41.79 240.46-13.32s95.93-147.93 66.7-231.39c-59.28-169.3-292.25-187.9-378.45-31.82z'
											opacity={1}
											data-original='#3a76f0'
										/>
										<path
											fill='#e73d76'
											d='M-3632.44 1137.31c142.96-49.28 92.44-211.16 106.92-206.34 93.59 45.76 198.84 145.6 198.84 295.36 0 114.82-89.02 216.32-218.4 216.32-114.77 5.2-212.03-83.57-217.23-198.35-5.41-119 105.74-205.79 105.74-184.37.99 12.2 11.35 77.38 24.13 77.38z'
											opacity={1}
											data-original='#e73d76'
										/>
										<path
											fill='#178cc8'
											d='M-2691.65 1017.87c76.8 4.51 121.77 38.29 126.14 69.82 2.13 20.62-11.57 36.65-35.35 36.65-34.74 0-38.28-46.3-98.1-46.3-26.97 0-49.75 11.22-49.75 35.55 0 50.84 191.65 21.31 191.65 133.26 0 64.53-51.65 106.81-128.75 106.81-67.81 0-135.97-30.74-135.63-83.67.12-15.97 12.02-30.62 27.88-30.62 39.94 0 39.57 59.33 103.16 59.33 44.59 0 59.82-24.34 59.82-41.3 0-61.25-192.78-23.69-192.78-138.89 0-62.35 51.22-105.35 131.71-100.64zm42.06 403.05c123.03 74.37 267.08-68 189.81-192.33 28.85-164.81-115.36-305.83-278.27-275.54-122.71-74.76-267.39 67.13-190.44 191.7-29.38 163.57 114.01 307.61 278.9 276.17z'
											opacity={1}
											data-original='#178cc8'
										/>
										<path
											fill='#10658f'
											d='M-2148.34 1442.86h105.65v-341.33h-105.65zm274.55-179.17c0-47.98 22.09-76.58 64.38-76.58 38.85 0 57.51 27.44 57.51 76.58v179.18l105.17-.01v-216.11c0-91.43-51.83-135.64-124.2-135.64-72.4 0-102.86 56.4-102.86 56.4v-45.98h-101.35v341.33h101.35v-179.17zm-222.22-206.85c34.5 0 62.47-28.22 62.47-63 0-34.77-27.97-62.97-62.47-62.97-34.52 0-62.48 28.2-62.48 62.97 0 34.78 27.96 63 62.48 63z'
											opacity={1}
											data-original='#10658f'
										/>
										<path
											d='M-5239.92 1594.94c.02 7.81 2.31 120.68 120.76 127.72 0 32.55.03 56.15.03 87.21-8.97.52-77.97-4.49-120.93-42.8l-.13 169.78c1.63 117.84-85.08 189.54-198.44 164.78-195.46-58.47-130.51-348.37 65.75-317.34 0 93.59.05-.03.05 93.59-81.07-11.93-108.19 55.51-86.65 103.81 19.61 43.96 100.34 53.5 128.49-8.53 3.19-12.14 4.79-25.98 4.79-41.52v-337.13z'
											fill='#000000'
											opacity={1}
											data-original='#000000'
										/>
										<g fillRule='nonzero'>
											<path
												fill='#d0272c'
												d='M-4469.99 1933.14c-13.44 70.49-29.86 138.07-78.5 173.37-15.02-106.54 22.04-186.55 39.25-271.5-29.34-49.39 3.53-148.79 65.42-124.29 76.15 30.12-65.95 183.63 29.44 202.8 99.6 20.01 140.26-172.81 78.51-235.51-89.24-90.55-259.76-2.07-238.79 127.57 5.1 31.69 37.84 41.3 13.08 85.04-57.11-12.66-74.15-57.7-71.96-117.76 3.53-98.29 88.32-167.11 173.36-176.63 107.56-12.04 208.5 39.48 222.44 140.65 15.69 114.2-48.55 237.87-163.55 228.98-31.18-2.43-44.26-17.87-68.7-32.72z'
												opacity={1}
												data-original='#d0272c'
											/>
											<path
												fill='#5a3e85'
												d='m-3756.02 1594.51-33.39 89.04v356.14h122.38v66.82h66.81l66.75-66.82h100.14l133.56-133.51v-311.67zm44.49 44.49h367.26v244.88l-77.92 77.92h-122.4l-66.73 66.73v-66.73h-100.21zm122.42 222.65h44.52V1728.1h-44.52zm122.41 0h44.51V1728.1h-44.51z'
												opacity={1}
												data-original='#5a3e85'
											/>
											<path
												fill='#3caf41'
												d='M-2698.74 1733.62c-11.72.21-21.62 10.19-21.41 21.58.21 11.81 9.93 21.04 21.98 20.9 12.08-.15 21.24-9.48 21.13-21.54-.1-11.83-9.77-21.16-21.7-20.94zm150.41 136.23c-9.29-.07-17.18 7.54-17.56 16.93-.4 10.03 7.4 18.28 17.33 18.3 9.61.03 17.2-7.23 17.55-16.8.37-10.05-7.43-18.36-17.32-18.43zm-92.53 18.41c.38-10.01-7.67-18.41-17.7-18.45-9.92-.04-18.24 8.47-17.89 18.33.32 9.43 8.26 17.05 17.77 17.06 9.49.01 17.45-7.4 17.82-16.94zm109.84 164.41c-14.63-1.53-30.01 6.91-45.31 8.48-46.63 4.77-88.4-8.23-122.85-40.08-65.51-60.59-56.15-153.5 19.64-203.15 67.36-44.13 166.15-29.42 213.64 31.81 41.45 53.43 36.58 124.36-14.02 169.25-23.61 20.95-13.71 27.63-7.57 51.97-13.6-6.06-28.68-16.73-43.53-18.28zm-302.83-319.04c-11.95-.36-21.78 8.78-22.13 20.56-.35 11.94 8.78 21.5 20.82 21.81 11.93.3 21.94-8.84 22.38-20.47.44-11.59-9.66-21.57-21.07-21.9zm72.22 213.69c-18.57-2.3-35.48-4.83-52.48-6.27-5.87-.49-12.84.21-17.82 3.02-16.51 9.32-32.34 19.84-51.1 31.56 3.44-15.57 5.67-29.2 9.62-42.32 2.9-9.63 1.55-15-7.33-21.28-115.1-81.26-78.79-230.75 49.97-272.81 100.32-32.78 226.22 24.88 236.57 135.64-96.71 5.05-176.11 70.06-167.43 172.46z'
												opacity={1}
												data-original='#3caf41'
											/>
											<path
												fill='#1e1b1e'
												d='M-2014.21 1705.12c79.75 0 144.4 65.1 144.4 145.39 0 80.3-64.65 145.39-144.4 145.39s-144.4-65.09-144.4-145.39c0-80.29 64.65-145.39 144.4-145.39zm230.6 8.52c39.88 0 72.2 61.27 72.2 136.87.13 18.22-7.61 136.88-72.19 136.88-39.88 0-72.21-61.3-72.21-136.88s32.33-136.87 72.2-136.87zm111.61 14.25c14.02 0 25.39 54.9 25.39 122.62 0 67.7-11.37 122.62-25.39 122.62-14.03 0-25.39-54.9-25.39-122.62s11.36-122.62 25.39-122.62z'
												opacity={1}
												data-original='#1e1b1e'
											/>
											<path
												fill='#e01e5a'
												d='M-1229.55 1594.85c-28.14 0-51.13 22.99-51.13 51.13s22.99 51.13 51.13 51.13h51.14v-51.13c0-28.14-22.65-51.13-51.14-51.13zm-187.02 323.95c0 28.14 22.99 51.13 51.13 51.13s51.13-22.99 51.13-51.13v-51.13h-51.13c-28.48 0-51.13 22.99-51.13 51.13zm136.23 0v136.58c0 28.14 23 51.13 51.14 51.13s51.13-22.99 51.13-51.13V1918.8c0-28.14-22.99-51.13-51.13-51.13-28.49 0-51.14 22.99-51.14 51.13zm187.03 187.71c28.14 0 51.13-22.99 51.13-51.13s-22.99-51.13-51.13-51.13h-51.13v51.13c0 28.14 22.99 51.13 51.13 51.13zm136.24-136.58c28.14 0 51.13-22.99 51.13-51.13s-22.99-51.13-51.13-51.13h-136.24c-28.14 0-51.13 22.99-51.13 51.13s22.99 51.13 51.13 51.13zm51.13-187.71c0-28.14-22.99-51.13-51.13-51.13s-51.14 22.99-51.14 51.13v51.13h51.14c28.14.35 51.13-22.65 51.13-51.13zm-136.24 0v-136.58c0-28.14-22.99-51.13-51.13-51.13s-51.13 22.99-51.13 51.13v136.58c0 28.14 22.99 51.13 51.13 51.13 28.48.35 51.13-22.65 51.13-51.13zm-187.37-51.13h-135.89c-28.14 0-51.13 22.99-51.13 51.13s22.99 51.13 51.13 51.13h136.24c28.14 0 51.13-22.99 51.13-51.13-.34-28.14-22.99-51.13-51.48-51.13z'
												opacity={1}
												data-original='#e01e5a'
											/>
											<path
												fill='#23b7ec'
												d='m-909.22 1020.7-80.97 408.28s-11.33 28.31-42.47 14.72l-187.72-143.67c25.23-22.69 220.97-198.65 229.52-206.63 13.23-12.35 5.03-19.7-10.36-10.36l-289.11 183.59-111.54-37.55s-17.55-6.22-19.25-19.81 19.82-20.95 19.82-20.95l454.71-178.38s37.37-16.42 37.37 10.76z'
												opacity={1}
												data-original='#23b7ec'
											/>
										</g>
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
