//Dio Bank

//name, accountNumber
//depositar, sacar

import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SocioAccount } from './class/SocioAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(201201201, 'Willian', 1)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 10)
const socioAccount: SocioAccount = new SocioAccount('Alan', 2121)

console.log(peopleAccount)
console.log(companyAccount)
console.log(socioAccount)

