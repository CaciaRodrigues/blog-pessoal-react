function DeletarTema() {
    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar tema</h1>
            <p className="text-center font-semibold mb-4">Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-mountbatten-pink text-lavender-blush-white font-bold text-2xl">Tema</header>
                <p className="p-8 text-3xl bg-mimi-pink h-full">tema</p>
                <div className="flex">
                    <button className="text-lavender-blush-white bg-red-900 hover:bg-red-800 w-full py-2">Não</button>
                    <button className="w-full text-lavender-blush-white bg-rose-quartz hover:bg-lit-eggplant-purple flex items-center justify-center">Sim</button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema