import { Customer } from "../Domain/Customer"
import { CustomerRepository } from "../Domain/CustomerRepository"
import { ListCustomers } from "./ListCustomers"

export class ListCustomersHandler {

    readonly customerRepository: CustomerRepository

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository
    }

    async execute(command: ListCustomers): Promise<Customer[]> {
        return this.customerRepository.findAll()
    }
}