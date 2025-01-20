function FormTema() {
    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">Cadastrar Tema</h1>

            <form className="w-1/2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do Tema</label>
                    <input 
                        type="text"
                        placeholder="Descreva aqui seu tema"
                        name="descricao"
                        className="border-2 border-rose-quartz rounded p-2" 
                    />
                </div>
                <button className="rounded text-lavender-blush-white bg-rose-quartz hover:bg-lit-eggplant-purple w-1/2 py-2 mx-auto flex justify-center" type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default FormTema;