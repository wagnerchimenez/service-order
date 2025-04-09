import { Customer } from "../Domain/Customer"
import { CustomerRepository } from "../Domain/CustomerRepository"

export class AsyncStorageCustomerRepository implements CustomerRepository {
    save(customer: Customer): Promise<void> {
        throw new Error("Method not implemented.")
    }

    findAll(): Promise<Customer[]> {
        throw new Error("Method not implemented.")
    }
}
