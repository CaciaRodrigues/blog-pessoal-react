import "./Login.css";

function Login() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-lavender-blush-white text-licorine-black">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4">
          <h2 className="text-5xl ">Entrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-rose-quartz rounded-lg p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-rose-quartz rounded-lg p-2"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-rose-quartz flex justify-center
                                   hover:bg-lit-eggplant-purple text-lavender-blush-white w-1/2 py-2"
          >
            <span>Entrar</span>
          </button>

          <hr className="border-rose-quartz w-full" />

          <p>Ainda não tem uma conta? Cadastre-se</p>
        </form>
        <div className="fundoLogin hidden lg:block filter saturate-25 hover:saturate-100 transition duration-1000"></div>
      </div>
    </>
  );
}

export default Login;
