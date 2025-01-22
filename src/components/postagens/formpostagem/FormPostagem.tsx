function FormPostagem() {

    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">Cadastrar Postagem</h1>

            <form className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Título da Postagem</label>
                    <input 
                    type="text"
                    placeholder="Escreva aqui o título da postagem"
                    name="titulo"
                    required
                    className="border-2 border-rose-quartz rounded p-2"
                />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="texto">Texto da Postagem</label>
                    <input 
                        type="text"
                        placeholder="Escrava aqui a sua postagem"
                        name="texto"
                        required
                        className="border-2 border-rose-quartz rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Tema da Postagem</p>
                    <select name="tema" id="tema" className="border p-2 border-lit-eggplant-purple rounded">
                        <option value="" selected disabled>Selecione um Tema</option>
                        <>
                            <option>tema1</option>
                        </>
                    </select>
                </div>
                <button type="submit" className="rounded disabled:bg-mimi-pink bg-rose-quartz hover:bg-mid-eggplant-purple text-lavender-blush-white font-bold w-1/2 mx-auto py-2 flex justify-center">Cadastrar</button>
            </form>
        </div>
    );
}

export default FormPostagem;