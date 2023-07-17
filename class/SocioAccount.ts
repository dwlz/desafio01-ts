import { DioAccount } from "./DioAccount";

export class SocioAccount extends DioAccount {


    constructor(name: string, accountNumer: number) {
        super(name, accountNumer)
    }

    deposit = (valor: number): void => {
        if(this.status) {
            this.balance = valor + 10
            console.log(`Você depositou R$${this.balance} reais`)
        } else {
            console.log('Conta inelegivel')
        }

    }
}