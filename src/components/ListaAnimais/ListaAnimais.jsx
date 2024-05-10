import { useState } from 'react';
import './ListaAnimais.css'
import { useEffect} from 'react';

function ListaAnimais() {

    const [animais,setAnimais] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/listar-aves');
                if (!response.ok) {
                    throw new Error('Erro ao buscar servidor');
                }
                const listaAnimais = await response.json();
                setAnimais(listaAnimais);
            } catch (error) {
                console.error('Erro: ', error);
            }
        }

        fetchData();
    }, []);


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
                    </tr>
                </thead>
                <tbody>
                {animais.length > 0 ? (
                    animais.map((animal) => (
                        <tr>
                        <td>{animal.nomeanimal}</td>
                        <td>{animal.idadeanimal}</td>
                        <td>{animal.generoanimal}</td>
                        <td>{animal.envergaduraanimal}</td>
                    </tr>
                    )
                )): (
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