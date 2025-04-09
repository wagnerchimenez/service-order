import { Customer } from "../Domain/Customer"

export class DeleteCustomer {

    readonly customer: Customer

    constructor(
        customer: Customer
    ) {
        this.customer = customer
    }
}