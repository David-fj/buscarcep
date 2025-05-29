import {useEffect, useState} from 'react'

function Exemplo1()
{

    const [numero, setNumero] = useState(0)
    useEffect(() => {
        console.log("Estado do butão mudou, agora é", numero)
    }, [numero])

    const aumentar = () => {
        setNumero(numero + 1);
    }

    return(
        <>
            <h2>Exemplo: 1 utilizações do useEffect</h2>
    <p>O useEffect tem duas utilizadades principais:</p>
    <ol type="number">
      <li>Executar alguma função ou algum bloco de código assim que a página é carregada</li>
      <li>Monitorar a mudança de um estado para executar algum bloco de código ou função</li>
    </ol>

    <div>
        <h3>Número: {numero}</h3>
        <button onClick={aumentar}>Aumentar</button>
    </div>
        </>
    )
}

export default Exemplo1