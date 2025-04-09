import { Email } from "@/Shared/Domain/Email"
import { Phone } from "@/Shared/Domain/Phone"

import { Customer } from "../Domain/Customer"
import { CustomerRepository } from "../Domain/CustomerRepository"

export class InMemoryCustomerRepository implements CustomerRepository {

    private customers: Customer[] = []

    constructor() {
        // this.customers = customers
        this.customers = this.customersDefault()
    }

    save(customer: Customer): Promise<void> {
        throw new Error("Method not implemented.")
    }

    async findAll(): Promise<Customer[]> {
        return this.customers
    }

    private customersDefault(): Customer[] {
        return [
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'John Doe',
                Email.create('john.doe@example.com'),
                Phone.create('67999999999'),
            ),
            Customer.create(
                'Other Customer',
                Email.create('other.customer@example.com'),
                Phone.create('67999999999'),
            ),
            
        ]
    }
}