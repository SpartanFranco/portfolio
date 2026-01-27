import { Card } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { Eye } from 'lucide-react';

export function FeaturedProjects() {
	return (
		<section
			className='px-6 py-20'
			id='lab'
		>
			<div className='container mx-auto max-w-6xl space-y-32'>
				{projects.map((project, index) => (
					<div
						key={index}
						className={`flex flex-col ${
							project.align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
						} items-center gap-12`}
					>
						<div className='flex-1'>
							<p className='mb-2 text-sm text-purple-400'>Featured Project</p>
							<h3 className='mb-6 text-4xl font-bold text-white'>
								{project.title}
							</h3>
							<div className='my-2 flex-1 md:hidden'>
								<Card className='overflow-hidden border-purple-500/30 bg-gray-800/50 py-0 backdrop-blur-sm'>
									<img
										src={project.image || '/placeholder.svg'}
										alt={project.title}
										className='w-full object-contain'
									/>
								</Card>
							</div>
							<Card className='mb-6 border-purple-500/30 bg-gray-800/50 p-6 backdrop-blur-sm'>
								<p className='leading-relaxed text-gray-300'>
									{project.description}
								</p>
							</Card>
							<div className='flex gap-4'>
								<a
									href={project.view}
									target='_blank'
									className='flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-900/30 transition-colors hover:bg-purple-900/50'
								>
									<span className='text-white'>
										<Eye />
									</span>
								</a>
								<a
									href={project.repo}
									target='_blank'
									className='flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-900/30 transition-colors hover:bg-purple-900/50'
								>
									<span className='text-white'>🔗</span>
								</a>
							</div>
						</div>
						<div className='hidden flex-1 md:block'>
							<Card className='overflow-hidden border-purple-500/30 bg-gray-800/50 py-0 backdrop-blur-sm'>
								<img
									src={project.image || '/placeholder.svg'}
									alt={project.title}
									className='w-full object-contain'
								/>
							</Card>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
