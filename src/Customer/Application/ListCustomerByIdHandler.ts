import { ListCustomerById } from "./ListCustomerById"
import { CustomerRepository } from "../Domain/CustomerRepository"
import { Customer } from "../Domain/Customer"

export class ListCustomerByIdHandler {

    customerRepository: CustomerRepository

    constructor(
        customerRepository: CustomerRepository
    ) {
        this.customerRepository = customerRepository
    }

    async execute(command: ListCustomerById): Promise<Customer | null> {
        return this.customerRepository.findById(command.id)
    }

}