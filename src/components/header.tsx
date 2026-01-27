import CodeIcon from './code-icon';

export function Header() {
	return (
		<header className='fixed z-50 w-full border-b border-purple-900/20 bg-[#0a0118]/80 backdrop-blur-sm'>
			<div className='container mx-auto px-6 py-4'>
				<div className='flex items-center justify-between'>
					<a
						href='#home'
						className='text-2xl font-bold text-white'
					>
						<CodeIcon />
					</a>
					<nav className='flex gap-8'>
						<a
							href='#home'
							className='text-white transition-colors hover:text-purple-400'
						>
							Home
						</a>
						<a
							href='#about'
							className='text-white transition-colors hover:text-purple-400'
						>
							About
						</a>
						<a
							href='#lab'
							className='text-white transition-colors hover:text-purple-400'
						>
							Lab
						</a>
					</nav>
				</div>
			</div>
		</header>
	);
}
