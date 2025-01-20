import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { ThreeDots } from "react-loader-spinner";

function DeletarTema() {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Tema apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert('Erro ao deletar o tema.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar tema</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o tema a seguir?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-mountbatten-pink text-lavender-blush-white font-bold text-2xl">
          Tema
        </header>
        <p className="p-8 text-3xl bg-mimi-pink h-full">tema</p>
        <div className="flex">
          <button className="text-lavender-blush-white bg-red-900 hover:bg-red-800 w-full py-2" onClick={retornar}>
            Não
          </button>
          <button className="w-full text-lavender-blush-white bg-rose-quartz hover:bg-lit-eggplant-purple flex items-center justify-center" onClick={deletarTema}>
            {isLoading ? 
                <ThreeDots
                    visible={true}
                    height="25"
                    width="60"
                    color="#33212B"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                /> :
                <span>Sim</span>
            }
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarTema;
