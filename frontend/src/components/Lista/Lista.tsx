import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor, ListaVazia } from "./Lista.style";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";

interface ListaProps {
    professores: Professor[],
};

const Lista = (props: ListaProps) => {
    //    const [contador, setContador] = useState(0);

    return (
        <div>
            {/* <div>Contador igual: {contador}.</div>
            <button onClick={() => setContador(contador + 1)}>Somar +1</button> */}

            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto}>
                            </Foto>

                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                                <Descricao>{FormatadorService.limitarTexto(professor.descricao, 100)}</Descricao>
                                <Button sx={{ width: '70%' }}>Invista em você. Marcar um horário com o {professor.nome}.</Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item econtrado!</ListaVazia>
            )}

        </div>
    );
};

export default Lista;