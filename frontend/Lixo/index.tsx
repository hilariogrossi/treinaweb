import type { NextPage } from 'next'

function Botao(props) {
  return (
    <a href="#">{props.title}</a>
  );
}

const Home: NextPage = () => {
  return (
    <div>
      <Botao title="Click" /><br />
      <Botao title="Entrar" /><br />
      <Botao title="Ver" /><br />
      <Botao title="Voltar" /><br />

    </div>
  )
}

export default Home
