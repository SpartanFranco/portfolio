export function AboutSection() {
	return (
		<section
			id='about'
			className='px-6 py-20'
		>
			<div className='container mx-auto max-w-4xl'>
				<h2 className='mb-6 text-4xl font-bold text-white'>
					Web Developer focused on Frontend.
				</h2>

				<p className='mb-4 text-gray-400'>
					I’m a <span className='text-purple-400'>Frontend Developer</span>{' '}
					specialized in building modern, scalable, and high-performance web
					applications.
				</p>

				<p className='leading-relaxed text-gray-300'>
					I work mainly with <span className='text-purple-400'>React</span>,{' '}
					<span className='text-purple-400'>Next.js</span>, TypeScript, and
					Tailwind CSS, creating intuitive user interfaces and smooth user
					experiences. I enjoy turning complex problems into clean, elegant
					solutions with a strong focus on performance, accessibility, and
					maintainable code.
				</p>
			</div>
		</section>
	);
}
