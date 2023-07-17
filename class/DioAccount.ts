export abstract class DioAccount {
    private name: string
    private readonly accountNumber: number
    balance: number = 0
    status: boolean = false

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log('Name alterado com sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    deposit = (valor: number): void => {
        if(this.validateStatus()) {
            this.balance = valor
            console.log(`Você depositou R$${valor} reais`)
        }
        throw new Error('Conta inválida!')
    }

    withdraw = (valor: number): void => {
        if(this.validateStatus()) {
            if(valor > this.balance) {
                console.log(`Saldo insuficiente, seu saldo atual R$${this.balance}`)
            } else {
                this.balance -= valor
                console.log(`R$${valor} reais, você sacou!`)
            }
            
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }
        throw new Error('Conta inválida!')
    }
}