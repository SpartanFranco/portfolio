import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { TechStack } from '@/components/tech-stack';
import { LogoShowcase } from '@/components/logo-showcase';
import { FeaturedProjects } from '@/components/featured-projects';
import { ContactSection } from '@/components/contact-section';

const App = () => {
	return (
		<div className='relative min-h-screen w-full'>
			<Header />
			<main className='object-contain'>
				<HeroSection />
				<AboutSection />
				{/* <WorkExperience /> */}
				<TechStack />
				<LogoShowcase />
				<FeaturedProjects />
				<ContactSection />
			</main>
		</div>
	);
};

export default App;
