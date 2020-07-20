const connection = require("../database/index");

require("dotenv-safe").config(); 
const jwt = require('jsonwebtoken');

module.exports = {
    async index(request, response) {
      try {
        const cadastro = await connection("curriculo").select(
          'id', 'nome', 'email'
       );
    
        return response.status(200).json(cadastro);

        
      } catch (error) {
        
        return response.status(500).json(error);

      }
       
      },

      async indexUm(request, response) {

        const id = request.body.id;


        if(!request.body.id || request.body.id===''){
          return response.status(404).json('error');
        }else{

        try {
          const cadastroT = await connection("curriculo").where('id', id ).select(
            'nome', 'email', 'experiencia'
         );
      
          return response.status(200).json(cadastroT);
  
          
        } catch (error) {
          
          return response.status(500).json(error);
  
        }

      }

         
        },

t(request, response){

 const valor =1;
    var token = jwt.sign({ valor }, process.env.SECRET, {
      expiresIn: 3500 // expires in 5min
    });
    //response.redirect('/usuario');
     response.json({ auth: true, token: token});
  
  

},
        

async create(request, response) {

  const {
    nome,
    email,
    experiencia
  } = request.body;

  if(!request.body || request.body.nome==='' || request.body.email==='' || request.body.experiencia===''){
    return response.status(404).json('error');
  }else{

  
  try {
    
    
  
    const [id] = await connection('curriculo').insert({
      nome,
      email,
      experiencia
    });
  
    return response.status(200).json({ id });

  } catch (error) {
    
    return response.status(500).json(error);

  }
}
    
  }



};