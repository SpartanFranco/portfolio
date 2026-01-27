const whatsappNumber = '+5356704779'; // reemplaza con tu número real con código de país
// const facebookProfile = 'https://www.facebook.com/tu.usuario'; // reemplaza con tu perfil real
export function ContactSection() {
	return (
		<section
			id='contact'
			className='px-6 py-20'
		>
			<div className='container mx-auto max-w-4xl'>
				<h2 className='mb-6 text-4xl font-bold text-white'>
					Let&apos;s work together
				</h2>

				<p className='mb-6 leading-relaxed text-gray-300'>
					I&apos;m open to new opportunities and collaborations. If you&apos;re
					looking for a frontend developer or have a project in mind, feel free
					to reach out.
				</p>

				<a
					href='mailto:geovanispartaco@gmail.com'
					className='inline-block text-lg text-purple-400 transition-colors hover:text-purple-300'
				>
					geovanispartaco@gmail.com
				</a>

				<div className='mt-8 flex gap-4'>
					{/* GitHub */}
					<a
						href='https://github.com/SpartanFranco'
						target='_blank'
						rel='noopener noreferrer'
						className='flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-900/30 transition-all hover:scale-105 hover:bg-purple-900/50'
						aria-label='GitHub'
					>
						<img
							src='https://skillicons.dev/icons?i=github'
							alt='GitHub'
							className='size-10'
						/>
					</a>

					{/* WhatsApp */}
					<a
						href={`https://wa.me/${whatsappNumber.replace(/\D/g, '')}`}
						target='_blank'
						rel='noopener noreferrer'
						className='flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-900/30 transition-all hover:scale-105 hover:bg-purple-900/50'
						aria-label='WhatsApp'
					>
						<img
							src='https://skillicons.dev/icons?i=whatsapp'
							alt='WhatsApp'
							className='size-10'
						/>
					</a>

					{/* Facebook */}
					{/* <a
						href={facebookProfile}
						target='_blank'
						rel='noopener noreferrer'
						className='flex h-10 w-10 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-900/30 transition-all hover:scale-105 hover:bg-purple-900/50'
						aria-label='Facebook'
					>
						<img
							src='/facebook.svg'
							alt='Facebook'
							className='size-10 fill-[#0866FF]'
						/>
					</a> */}
				</div>
			</div>
		</section>
	);
}
