import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function NewCad(){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const token = localStorage.getItem('x-acess-token');
  
  const history = useHistory();
  async function handleNewIncident(e){
    e.preventDefault();

    const data = {
      nome, 
      email,
      experiencia,
    };
 
    try{
        
      await api.post('/criar', data, {headers: {
        token: token
    }})
    alert('cadastrado.');
    history.push('/lista');
    } catch(err){
      alert('Erro ao cadastrar.');
    }


  }

return(

    <div className="new-incident-container">

<Link className="back-link" to="/lista">
                       
                       lista
                    </Link>
                    <br></br>
                    <Link className="back-link" to="/cadastro">
                       
                       cadastro
                    </Link>
        <div className="content">
          <section>

                <h1>Cadastrar</h1>


          </section>
          <form onSubmit={handleNewIncident}>
            <input 
            placeholder="nome"
            value={nome}
            onChange={e=> setNome(e.target.value)}
            required
            />
            <input
            placeholder="E-mail"
            type="email"     
            value={email}
            onChange={e=> setEmail(e.target.value)}
            required
            />
            <textarea  
            placeholder="experiencia" 
            value={experiencia}
            onChange={e=> setExperiencia(e.target.value)}
            required
            />
            
            <button className="button" type="submit">Cadastrar</button>

          </form>
          </div>  
      </div>
)

}