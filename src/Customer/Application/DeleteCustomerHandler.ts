import { CustomerRepository } from "../Domain/CustomerRepository"
import { DeleteCustomer } from "./DeleteCustomer"

export class DeleteCustomerHandler{

    readonly customerRepository: CustomerRepository

    constructor(
        customerRepository: CustomerRepository
    ) {
        this.customerRepository = customerRepository
    }

    async execute(command: DeleteCustomer): Promise<void> {
        await this.customerRepository.delete(command.customer)
    }
    
    
}