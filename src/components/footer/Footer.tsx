import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center  bg-dark-purple-brown text-mimi-pink font-montserrat">
                <div className="container flex flex-col items-center py-5 gap-3">
                    <p className='text-xl font-bold'> Projeto Blog Pessoal Generation | Copyright: {data}</p>

                    <p className='flex gap-2'>Desenvolvido e estilizado com <img src="https://ik.imagekit.io/caciasrs/red-heart-mid.svg?updatedAt=1737301648707" alt="Stylized red anatomical heart" className='size-5 hover:animate-pulse'/> por Cacia S R Sousa</p>
                    
                    <p className='text-lg'>Para contato:</p>
                    <div className='flex gap-4'> 
                        <a href="https://www.linkedin.com/in/cacia-rodrigues-57b16b193/" target='_blank' className='hover:text-lit-rose-quartz'>
                            <LinkedinLogo size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/CaciaRodrigues" target='_blank' className='hover:text-lit-rose-quartz'>
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/caciarodrigues.cr/" target='_blank' className='hover:text-lit-rose-quartz'>
                            <InstagramLogo size={48} weight='bold' />
                        </a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer