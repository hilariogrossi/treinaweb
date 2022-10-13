// import { useState } from "react";
// import { Professor } from "../../@types/professor";

// export function useIndex() {
//     const [listaProfessores, setListaProfessores] = useState<Professor[]>([
//             {
//                 id: 1,
//                 nome: 'Professor 1',
//                 foto: 'https://github.com/hilariogrossi.png',
//                 descricao: 'Descrição do professor 1',
//                 valor_hora: 250,
//             },

//             {
//                 id: 2,
//                 nome: 'Professor 2',
//                 foto: 'https://github.com/hilariogrossi.png',
//                 descricao: 'Descrição do professor 2',
//                 valor_hora: 150,
//             },

//             {
//                 id: 3,
//                 nome: 'Professor 3',
//                 foto: 'https://github.com/hilariogrossi.png',
//                 descricao: 'Descrição do professor 3',
//                 valor_hora: 100,
//             },

//             {
//                 id: 4,
//                 nome: 'Professor 4',
//                 foto: 'https://github.com/hilariogrossi.png',
//                 descricao: 'Descrição do professor 4',
//                 valor_hora: 200,
//             },

//     ]);

//     return {
//         listaProfessores,
//     }
// };





// import { useEffect, useState } from "react";
// import { Professor } from "../../@types/professor";
// import { ApiService } from "../../services/ApiService";

// export function useIndex() {
//     const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);

//     const [nome, setNome] = useState('');
//     const [email, setEmail] = useState('');

//     const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null);

//     const [mensagem, setMensagem] = useState('');

//     useEffect(() => {
//         ApiService.get('/professores')
//             .then((resposta) => {
//                 setListaProfessores(resposta.data)
//             })
//     }, []); // [] o array vazio executa essa função apenas uma vez.

//     useEffect(() => {
//         limparFormulario();
//     }, [professorSelecionado]);

//     function marcarAula() {
//         if (professorSelecionado !== null) {
//             if (validarDadosAula()) {
//                 ApiService.post('/professores/' + professorSelecionado.id + '/aulas', {
//                     nome,
//                     email

//                 }).then(() => {
//                     setProfessorSelecionado(null);
//                     setMensagem('Cadastrado com sucesso!');

//                 }).catch((error) => {
//                     setMensagem(error.response?.data.message);
//                 });

//             } else {
//                 setMensagem('Preencha os dados corretamente!');
//             }
//         }
//     }

//     function validarDadosAula() {
//         return nome.length > 0 && email.length > 0;
//     }

//     function limparFormulario() {
//         setNome('');
//         setEmail('');
//     }

//     return {
//         listaProfessores,
//         nome,
//         setNome,
//         email,
//         setEmail,
//         professorSelecionado,
//         setProfessorSelecionado,
//         marcarAula,
//         mensagem,
//         setMensagem,
//     }
// };
