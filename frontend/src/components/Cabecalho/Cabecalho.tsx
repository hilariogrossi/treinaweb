import { CabecalhoContainer, Logo } from './Cabecalho.style';

const Cabecalho = () => {
    return (
            <CabecalhoContainer>
                <div>
                    <Logo src="/imagens/myteacher.png" />
                </div>

                <p>Encontre o professor perfeito.</p>

                <footer>
                    &copy;Dev HGO!
                </footer>
            </CabecalhoContainer>

    );
};

export default Cabecalho;