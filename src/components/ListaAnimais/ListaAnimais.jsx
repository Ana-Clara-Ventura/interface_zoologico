import './ListaAnimais.css'

function ListaAnimais() {

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
                    <tr>
                        <td>Teste</td>
                        <td>Teste</td>
                        <td>Teste</td>
                        <td>Teste</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </>
    );
}

export default ListaAnimais;