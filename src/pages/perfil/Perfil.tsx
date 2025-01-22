import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            alert('Você precisa estar logado')
            navigate("/")
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto m-4 rounded-2xl overflow-hidden'>

            <img 
                className='w-full h-80 object-cover border-b-4 border-lavender-blush-white filter saturate-25' 
                src="https://ik.imagekit.io/caciasrs/capa-perfil.jpg?updatedAt=1737570200586" alt="Capa do Perfil" />

            <img 
                className='rounded-full w-72 mx-auto mt-[-11.5rem] border-4 border-lavender-blush-white relative z-10' 
                src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} />

            <div className="relative mt-[-6rem] h-80 flex flex-col bg-rose-quartz text-lavender-blush-white text-2xl items-center justify-center gap-2">
                <p>Nome: {usuario.nome} </p>
                <p>Email: {usuario.usuario}</p>
            </div>

        </div>
    )
}

export default Perfil