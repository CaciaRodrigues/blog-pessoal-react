import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {

    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info');
    navigate('/')
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="w-full flex justify-around py-4 bg-dark-purple-brown text-mimi-pink" >
        <div className="container flex justify-between text-lg">
          <div className="flex gap-4">
            <img src="https://ik.imagekit.io/caciasrs/chocolatecosmos.png?updatedAt=1737301650426" alt="2 Chocolate Cosmos Flowers" className="h-8 w-12"/>
            <Link to="/home" className="text-2xl font-bold font-playwrite">
              Blog Pessoal
            </Link>
          </div>

          <div className=" group flex gap-4 font-montserrat">
            <Link to='/postagens' className="hover:text-mountbatten-pink">Postagens</Link>
            <Link to='/temas' className="hover:text-mountbatten-pink">Temas</Link>
            <Link to='/cadastrartema' className="hover:text-mountbatten-pink">Cadastrar Tema</Link>
            <Link to='/perfil' className="hover:text-mountbatten-pink">Perfil</Link>
            <Link to='' onClick={logout} className="hover:text-red-700">Sair</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {component}
    </>
  );
}

export default Navbar;
