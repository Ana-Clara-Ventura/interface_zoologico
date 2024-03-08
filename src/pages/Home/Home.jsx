import './Home.css'
import Atracao from '../../components/Atracao/Atracao'
import Navegacao from '../../components/Navegacao/Navegacao'
import Welcome from '../../components/Welcome/Welcome'

function Home(){
        
  const components = [];
   for (let i = 0; i<=2; i++){
    components.push(<Atracao key={i}/>)
   }

  return (
    <>
      <Navegacao></Navegacao>
      <Welcome></Welcome>
      <h1> Atrações </h1>
      <div className='ctn-atracoes'>
      {components}
      </div>
    </>
  )
}

export default Home;