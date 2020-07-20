import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';



export default function Logon(){
    const [login, setLogin] = useState('');
    const history = useHistory();
    const [senha, setSenha] = useState('');
    
async function handleLogin(e) {
    e.preventDefault();

    try{
        const response = await api.get('/', );

            localStorage.setItem('x-acess-token', response.data.token);
            console.log(response.data.token);
            history.push('/cadastro');
        
    } catch(err){

        alert('falha');
    }
    
}


    return (
        <div className="logon-container">
            <section className="form">

                <form onSubmit={handleLogin}>
                    <button className="button" type="submit">Entrar</button>
                </form>



            </section>
        </div>

    );

}