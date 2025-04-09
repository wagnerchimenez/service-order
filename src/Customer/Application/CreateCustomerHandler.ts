import { CreateCustomer } from "./CreateCustomer"
import { Customer } from "../Domain/Customer"
import { CustomerRepository } from "../Domain/CustomerRepository"

export class CreateCustomerHandler {
    private customerRepository: CustomerRepository

    constructor(customerRepository: CustomerRepository) {
        this.customerRepository = customerRepository
    }

    async execute(command: CreateCustomer): Promise<void> {
        const customer = Customer.create(
            command.name,
            command.email,
            command.phone
        )

        this.customerRepository.save(customer)
    }
}