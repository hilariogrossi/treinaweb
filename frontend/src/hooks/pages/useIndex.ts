import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);

    useEffect(() => {
        ApiService.get('/professores')
            .then((resposta) => {
                setListaProfessores(resposta.data)
            })
    }, []); // [] o array vazio executa essa função apenas uma vez.

    return {
        listaProfessores,
    }
};


