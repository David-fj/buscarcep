import {useEffect, useState} from 'react'
import axios from 'axios'


function Exemplo2()
{
    const [cep, setCep] = useState("");
    const [log, setLog] = useState("");
    const [bar, setBar] = useState("");
    const [cid, setCid] = useState("");
    const [est, setEst] = useState("");
    const [uf, setUf] = useState("");
    const input = (e) => {
        setCep(e.target.value);
    }

    useEffect(() => {
        if(cep.length == 8)
        {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((resp) => {
            setLog(resp.data.logradouro);
            setBar(resp.data.bairro)
            setCid(resp.data.localidade)
            setEst(resp.data.estado)
            setUf(resp.data.uf)
            })
        }
    }, [cep])

    return(
        <>
        <h2>Exemplo 2: Buscar endereço</h2>

        <div>
            <input type="number" placeholder="Digite seu CEP" onChange={input}/>
        
            {cep.length == 8 ? (<>
            
                <h3>Informações sobre o CEP:</h3>

            <ul>

                <li>Logradouro: {log}</li>
                <li>Bairro: {bar}</li>
                <li>Cidade: {cid}</li>
                <li>Estado: {est}</li>
                <li>UF: {uf}</li>
            </ul>
            </>) : (<><h3>Informar o CEP</h3></>)}
        </div>
        </>
    )
}

export default Exemplo2