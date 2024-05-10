import { useState } from 'react';
import './ListaAnimais.css'
import { useEffect } from 'react';
import AnimalRequests from '../../fetch/AnimalRequests'
import { FaTrash } from "react-icons/fa";

function ListaAnimais() {

    const [animais, setAnimais] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setAnimais(await AnimalRequests.listarAnimais());
            console.log(animais);
        }

        fetchData();
    }, []);

    const deletarAnimal = async (id) => {
        const confirma = window.confirm(`Deseja deletar o animal com o id ${id}?`);
        if(confirma){
            if(await AnimalRequests.deletarAnimal(id)){
                window.alert(`Animal deletado cm sucesso`)
                window.location.reload();
            }
            else{
                window.alert(`Erro ao deletar o animal`)
            }
        }
    }


    return (
        <>
            <div className='pagina'>
                <div className='alinhar'>
                    <h1>Lista de animais</h1>
                    <table className='tabela'>
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">Idade</th>
                                <th scope="col">Genero</th>
                                <th scope="col">Envergadura</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {animais ? (
                                animais.map((animal) => (
                                    <tr>
                                        <td>{animal.nomeanimal}</td>
                                        <td>{animal.idadeanimal}</td>
                                        <td>{animal.generoanimal}</td>
                                        <td>{animal.envergadura}</td>
                                        <td onClick={() => deletarAnimal(animal.idanimal)}><FaTrash /></td>
                                    </tr>
                                )
                                )) : (
                                <p>Carregando... Verifique se o servidor está funcionando</p>
                            )}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ListaAnimais;