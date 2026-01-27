import { Card } from '@/components/ui/card';

export function WorkExperience() {
	const experiences = [
		{
			icon: '📱',
			title: 'CIB on the Mobile',
			description:
				'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
			color: 'from-purple-500/20 to-pink-500/20',
		},
		{
			icon: '💬',
			title: 'CIB on the Mobile',
			description:
				'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
			color: 'from-orange-500/20 to-yellow-500/20',
		},
		{
			icon: '🚀',
			title: 'CIB on the Mobile',
			description:
				'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
			color: 'from-blue-500/20 to-cyan-500/20',
		},
		{
			icon: '🎨',
			title: 'CIB on the Mobile',
			description:
				'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
			color: 'from-purple-500/20 to-blue-500/20',
		},
	];

	return (
		<section className='px-6 py-20'>
			<div className='container mx-auto max-w-6xl'>
				<h2 className='mb-12 text-4xl font-bold text-white'>Work Experience</h2>
				<div className='grid gap-6 md:grid-cols-2'>
					{experiences.map((exp, index) => (
						<Card
							key={index}
							className={`bg-linear-to-br ${exp.color} border-purple-500/30 p-8 backdrop-blur-sm transition-all hover:border-purple-400/50`}
						>
							<div className='mb-4 text-5xl'>{exp.icon}</div>
							<h3 className='mb-3 text-2xl font-bold text-white'>
								{exp.title}
							</h3>
							<p className='mb-4 text-sm text-gray-300'>{exp.description}</p>
							<button className='rounded-lg border border-purple-500/30 bg-purple-600/30 px-4 py-2 text-sm text-white transition-colors hover:bg-purple-600/50'>
								LEARN MORE
							</button>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
