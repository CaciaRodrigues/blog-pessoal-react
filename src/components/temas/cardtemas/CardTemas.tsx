import { Link } from "react-router-dom";
import Tema from "../../../models/Tema";

interface CardTemasProps {
  tema: Tema;
}

function CardTemas({ tema }: CardTemasProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-dark-eggplant-purple text-lavender-blush-white font-bold text-2xl">
        Tema
      </header>
      <p className="p-8 text-3xl bg-mimi-pink h-full">{tema.descricao}</p>

      <div className="flex">
        <Link
          to={`/editartema/${tema.id}`}
          className="w-full text-lavender-blush-white bg-rose-quartz hover:bg-lit-eggplant-purple flex items-center justify-center py-2">
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletartema/${tema.id}`}
          className="text-lavender-blush-white bg-red-900 hover:bg-red-800 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;
