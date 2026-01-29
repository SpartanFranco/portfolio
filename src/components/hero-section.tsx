export function HeroSection() {
	return (
		<section
			id='home'
			className='px-6 pt-32 pb-20'
		>
			<div className='container mx-auto max-w-6xl'>
				<div className='flex flex-col items-center gap-12 lg:flex-row'>
					<div className='relative'>
						<img
							src='me2.png'
							className='h-100 w-[16rem] object-cover md:h-170 md:w-100'
						/>

						<div className='from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t to-transparent' />
					</div>
					<div className='flex-1 text-center lg:text-left'>
						<p className='mb-4 text-gray-400'>
							Hello! I Am{' '}
							<span className='text-purple-400'>Geovani Franco Hidalgo</span>
						</p>
						<h1 className='mb-6 text-5xl font-bold text-balance text-white lg:text-6xl'>
							Frontend Specialist
							<br />
							Building modern UIs with
							<br />
							<span className='text-purple-400'>React</span> &{' '}
							<span className='text-purple-400'>Next.js</span>
						</h1>
						<p className='text-sm text-gray-400'>
							Crafting clean code and seamless user interfaces with React,
							TypeScript and Tailwind CSS
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
