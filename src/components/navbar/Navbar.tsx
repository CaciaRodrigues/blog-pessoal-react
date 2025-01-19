import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import chocolateCosmos from '../../assets/imgs/chocolatecosmos.png';

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
      <div className="w-full flex justify-around py-4 bg-dark-purple-brown text-mimi-pink" >
        <div className="container flex justify-between text-lg">
          <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
