function DeletarPostagem() {
    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar Postagem</h1>

            <p className="text-center font-semibold mb-4">
                Você tem certeza que deseja apagar a postagem a seguir?
            </p>

            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
                <header className="py-2 px-6 bg-mountbatten-pink text-lavender-blush-white font-bold text-2xl">Postagem</header>
                <div className="p-4">
                    <p className="text-xl h-full">Título da Postagem</p>
                    <p>Texto da Postagem</p>
                </div>
                <div className="flex">
                    <button className="text-lavender-blush-white bg-red-900 hover:bg-red-800 w-full py-2">Não</button>
                    <button className="w-full text-lavender-blush-white bg-rose-quartz hover:bg-lit-eggplant-purple flex items-center justify-center">Sim</button>
                </div>
            </div>
        </div>
    );
}

export default DeletarPostagem;