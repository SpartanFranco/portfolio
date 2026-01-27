export function TechStack() {
	const technologies = [
		{ name: 'React', icon: 'react' },
		{ name: 'Next.js', icon: 'nextjs' },
		{ name: 'TypeScript', icon: 'ts' },
		{ name: 'JavaScript', icon: 'js' },
		{ name: 'HTML5', icon: 'html' },
		{ name: 'CSS3', icon: 'css' },
		{ name: 'Tailwind CSS', icon: 'tailwind' },
		{ name: 'Redux', icon: 'redux' },
		{ name: 'Vite', icon: 'vite' },
		{ name: 'Shadcn UI', icon: 'shadcn' },
		{ name: 'Git', icon: 'git' },
		{ name: 'GitHub', icon: 'github' },
		{ name: 'VS Code', icon: 'vscode' },
	];

	return (
		<section className='px-6 py-20'>
			<div className='container mx-auto max-w-4xl text-center'>
				<p className='mb-4 text-lg text-gray-300'>
					Technologies I use to build modern web interfaces
				</p>
				<p className='mb-10 text-gray-400'>
					Focused on performance, scalability, and clean developer experience
				</p>

				<div className='flex flex-wrap justify-center gap-4'>
					{technologies.map((tech) => (
						<div
							key={tech.name}
							className='flex h-16 w-16 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-900/30 text-2xl transition-all duration-300 hover:scale-110 hover:border-purple-400/50 hover:bg-purple-900/50 hover:shadow-lg hover:shadow-purple-500/20'
							title={tech.name}
						>
							<img
								src={`https://skillicons.dev/icons?i=${tech.icon}`}
								alt={tech.name}
								className='size-10'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
