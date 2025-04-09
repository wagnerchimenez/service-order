import { Customer } from "./Customer"

export interface CustomerRepository {

    readonly CUSTOMER_KEY: string

    save(customer: Customer): Promise<void>
    findAll(): Promise<Customer[]>
    delete(customer: Customer): Promise<void>
}
