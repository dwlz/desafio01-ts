import { DioAccount } from "./DioAccount"


export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = (valor: number): void  => {
        if(this.status) {
            this.balance += valor
            console.log(`Emprestimo de R$${valor} efetuado com sucesso!`)
        } else {
            console.log('Conta inelegivel')
        }
        
    }

    deposit = (): void => {
        console.log('A empresa depositou!')
    }
}