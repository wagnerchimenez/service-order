import { Email } from "@/Shared/Domain/Email"
import { Phone } from "@/Shared/Domain/Phone"

import { Customer } from "../Domain/Customer"
import { CustomerRepository } from "../Domain/CustomerRepository"

export class InMemoryCustomerRepository implements CustomerRepository {
    readonly CUSTOMER_KEY = 'customers'

    private customers: Customer[] = []

    constructor() { }

    async save(customer: Customer): Promise<void> {

        const nameExists = this.customers.find(customer => customer.name.toLowerCase() === customer.name.toLowerCase())

        if (nameExists) {
            throw new Error('Cliente já cadastrado')
        }

        const emailExists = this.customers.find(customer => customer.email.address === customer.email.address)

        if (emailExists) {
            throw new Error('Email já cadastrado')
        }

        const phoneExists = this.customers.find(customer => customer.phone.number === customer.phone.number)

        if (phoneExists) {
            throw new Error('Telefone já cadastrado')
        }

        this.customers.push(customer)
    }

    async delete(customer: Customer): Promise<void> {
        this.customers = this.customers.filter(customer => customer.id !== customer.id)
    }

    async findAll(): Promise<Customer[]> {
        return this.customers
    }
}