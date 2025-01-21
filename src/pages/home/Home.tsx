import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"

function Home() {
    return (
        <>
            <div className="bg-lit-rose-quartz flex justify-center">
                <div className='container grid grid-cols-2 text-lavender-blush-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded bg-mountbatten-pink text-lavender-blush-white 
                                            border-mountbatten-pink border-solid border-2 py-2 px-4 hover:bg-lit-eggplant-purple'
                                >
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/caciasrs/SirFitzWilliamDarcyDaSilva.jpg?updatedAt=1737471557485"
                            alt="Imagem Página Home"
                            className='w-2/3 rounded-full py-4 filter drop-shadow-2xl'
                        />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    )
}

export default Home;