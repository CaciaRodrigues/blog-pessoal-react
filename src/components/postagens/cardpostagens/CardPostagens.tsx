import { Link } from "react-router-dom";

function CardPostagens() {
    return (
        <div className="border-rose-quartz border flex flex-col rounded overflow-hidden justify-between">
            <div>
                <div className="flex w-full bg-lit-eggplant-purple py-2 px-4 items-center gap-4">
                    <img src="https://i.imgur.com/pK6vSCy.png" className="h-12 rounded-full" alt="" />
                    <h3 className="text-lg font-bold text-center uppercase">Nome do Usuário</h3>
                </div>
                <div className="p-4">
                    <h4 className="text-lg font-semibold uppercase">Título</h4>
                    <p>texto</p>
                    <p>Tema: </p>
                    <p>Data: </p>
                </div>
            </div>
            <div className="flex">
                <Link to='' className="w-full text-lavender-blush-white bg-rose-quartz hover:bg-lit-eggplant-purple flex items-center justify-center py-2">
                    <button>Editar</button>
                </Link>
                <Link to='' className="text-lavender-blush-white bg-red-900 hover:bg-red-800 w-full flex items-center justify-center">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardPostagens;