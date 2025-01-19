<<<<<<< HEAD
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
=======
import { Link } from "react-router-dom";
import chocolateCosmos from '../../assets/imgs/chocolatecosmos.png';
>>>>>>> estilizacao

function Navbar() {

  const navigate = useNavigate();

  const {handleLogOut} = useContext(AuthContext)

  function logout() {
    handleLogOut()
    alert('O Usuário foi desconctado com sucesso!')
    navigate('/')
  }

  return (
    <>
<<<<<<< HEAD
      <div className="w-full bg-indigo-900 text-white flex justify-center py-4" >
=======
      <div
        className="w-full flex justify-around py-4 bg-dark-purple-brown text-mimi-pink">
>>>>>>> estilizacao
        <div className="container flex justify-between text-lg">
          <div className="flex gap-4">
<<<<<<< HEAD
            Postagens 
            Temas 
            Cadastrar Tema 
            Perfil 
            <Link to='' onClick={logout} className="hover:underline">Sair</Link>
=======
            <img src={chocolateCosmos} alt="2 Chocolate Cosmos Flowers" className="h-8 w-12"/>
            <Link to="/home" className="text-2xl font-bold font-playwrite">
              Cacia S R Sousa
            </Link>
          </div>

          <div className=" group flex gap-4 font-montserrat">
            <p className="hover:text-mountbatten-pink">Postagens</p>
            <p className="hover:text-mountbatten-pink">Temas</p>
            <p className="hover:text-mountbatten-pink">Cadastrar Tema</p>
            <p className="hover:text-mountbatten-pink">Perfil</p>
            <p className="hover:text-red-700">Sair</p>
>>>>>>> estilizacao
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
