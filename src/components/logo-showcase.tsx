export function LogoShowcase() {
	return (
		<section className='px-6 py-32'>
			<div className='container mx-auto flex max-w-4xl items-center justify-center'>
				<div className='relative'>
					{/* Outer glow ring */}
					<div className='absolute inset-0 scale-150 rounded-full bg-purple-600/30 blur-[100px]' />

					{/* Platform */}
					<div className='relative h-50 w-60 md:w-125'>
						{/* Platform ellipse */}
						<div
							className='absolute inset-0 top-1/2 rounded-[50%] border border-purple-500/30 bg-linear-to-r from-purple-900/20 via-purple-600/30 to-purple-900/20'
							style={{ transform: 'perspective(500px) rotateX(60deg)' }}
						/>

						{/* Center logo */}
						<div className='absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
							<div className='flex h-32 w-32 items-center justify-center rounded-2xl border border-purple-400/50 bg-purple-600/80 shadow-[0_0_60px_rgba(168,85,247,0.6)] backdrop-blur-md'>
								<span className='text-6xl font-bold text-white'>て</span>
							</div>
						</div>

						{/* Decorative orbs */}
						<div className='absolute top-1/4 left-1/4 h-8 w-8 rounded-full bg-purple-400/30 blur-sm' />
						<div className='absolute top-1/4 right-1/4 h-6 w-6 rounded-full bg-blue-400/30 blur-sm' />
						<div className='absolute bottom-1/4 left-1/3 h-4 w-4 rounded-full bg-pink-400/30 blur-sm' />
						<div className='absolute right-1/3 bottom-1/4 h-5 w-5 rounded-full bg-purple-400/30 blur-sm' />
					</div>
				</div>
			</div>
		</section>
	);
}
