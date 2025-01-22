import { Link } from "react-router-dom";
import Postagem from "../../../models/Postagem";

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagens({postagem}: CardPostagensProps) {
    return (
        <div className="border-rose-quartz border flex flex-col rounded overflow-hidden justify-between">
            <div>
                <div className="flex w-full bg-lit-eggplant-purple py-2 px-4 items-center gap-4">
                    <img src={postagem.usuario?.foto} className="h-12 rounded-full" alt="" />
                    <h3 className="text-lg  text-lavender-blush-white font-bold text-center uppercase">{postagem.usuario?.nome}</h3>
                </div>
                <div className="p-4">
                    <h4 className="text-lg font-semibold uppercase">{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`} className="w-full text-lavender-blush-white bg-rose-quartz hover:bg-lit-eggplant-purple flex items-center justify-center py-2">
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