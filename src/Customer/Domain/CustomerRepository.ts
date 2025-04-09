import { Customer } from "./Customer"

export interface CustomerRepository {

    readonly CUSTOMER_KEY: string

    save(newCustomer: Customer): Promise<void>
    findAll(): Promise<Customer[]>
    delete(deletedCustomer: Customer): Promise<void>
}
