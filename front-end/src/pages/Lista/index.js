import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

export default function Logon() {
  const history = useHistory();
  const [curriculo, setCurriculo] = useState([]);
  const token = localStorage.getItem('x-acess-token');
  
  useEffect(() => {
    api.get("/lista", {headers: {
      token: token
  }}).then((response) => {
      setCurriculo(response.data);
    });
  }, [curriculo]);

  async function handleMais(id) {
    try {
      localStorage.setItem("id", id);
      history.push('/listaum');

      console.log(localStorage.getItem("id"));
    } catch (err) {
      alert("errrrooouu");
    }
  }

  return (
    <div className="logon-container">
      <Link className="back-link" to="/lista">
                       
                       lista
                    </Link>
                    <br></br>
                    <Link className="back-link" to="/cadastro">
                       
                       cadastro
                    </Link>
      <ul>
        {curriculo.map((response) => (
          <li>
            <strong>Mais:</strong>
            <button onClick={() => handleMais(response.id)} type="button">
              Mais
            </button>
            <strong>Nome:</strong>
            <p>{response.nome}</p>

            <strong>e-mail:</strong>
            <p>{response.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
