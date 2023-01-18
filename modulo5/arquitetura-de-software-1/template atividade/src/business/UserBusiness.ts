import { UserDatabase } from "../data/UserDatabase"


export class UserBusiness {


    createUser = async (input:any): Promise<void> =>{
        try{
            const { name, nickname, email, password } = input
        
        if (
            !name ||
            !nickname ||
            !email ||
            !password
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }
        if(password.lenght < 6){
            throw new Error ('Senha muito curta');
        }
            const id: string = Date.now().toString();
        
            const userDatabase = new UserDatabase();
            await userDatabase.insertUser({
                id,
                name,
                nickname,
                email,
                password,
            })
        
        } catch (error:any){
            throw new Error(error.message)
    }
}
findUser = () => {};
deleteUser = () => {};
}

// - Exercício 1
    
//     **Cadastro de usuários: `POST`
//     caminho: `"/createUser"`**
    
//     Crie um endpoint que faça o cadastro de usuários na aplicação. O endpoint deve receber as seguintes informações na **requisição**, em seu body:


// - Exercício 2
    
//     **Buscar todos os usuários: `GET`**
    
//     **Caminho:** `"/all"`

// - Exercício 3
    
//     A**pagar um usuário:** `DELETE`
    
//     **Caminho**: `"/:id"`