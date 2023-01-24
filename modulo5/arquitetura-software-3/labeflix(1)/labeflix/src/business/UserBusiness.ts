import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  async create({ email, name, password }: any):Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

}
// - Exercício 1
    
//     Comecemos do começo, isto é, do momento em que recebemos uma requisição, um `Request` dos nossos endpoints;  A camada de controle é quem recebe estes dados. Para que tenhamos sempre a estrutura das informações que chegam, crie um modelo para isso. Neste caso, será um `DTO`. Um `DTO`, ou *Data Transfer Object* determina a estrutura dos dados. DTOs podem ser de entrada ou saída. Como estamos recebendo os dados, será um DTO de entrada. 
    
//     **Dessa forma, crie DTOs para serem utilizados nos endpoints criar usuário e criar filme.**