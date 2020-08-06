import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

export default function Logon() {
  const history = useHistory();
  const [curriculo, setCurriculo] = useState([]);
const token = localStorage.getItem('x-acess-token');
  const id = localStorage.getItem('id');
  

try {
  
  useEffect(() => {
    api.post('/listaum', {id: id}, {headers: {
      token: token
  }}).then((response) => {
      setCurriculo(response.data);
    });
    localStorage.removeItem('id');
  }, [curriculo]);

} catch (error) {
 
  alert("errou");
}
  


  return (
    <div className="logon-container">
      <ul>
        {curriculo.map((response) => (
          <li>
            <strong>Nome:</strong>
            <p>{response.nome}</p>

            <strong>e-mail:</strong>
            <p>{response.email}</p>

            <strong>experiencia:</strong>
            <p>{response.experiencia}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
