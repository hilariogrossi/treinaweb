import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor, ListaVazia } from "./Lista.style";
import { Professor } from "../../@types/professor";

interface ListaProps {
    professores: Professor[],
};

const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto}>
                            </Foto>

                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{professor.valor_hora.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora</Valor>
                                <Descricao>{professor.descricao}</Descricao>
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