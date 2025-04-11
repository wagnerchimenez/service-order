import { Email } from "@/Shared/Domain/Email"
import { Phone } from "@/Shared/Domain/Phone"
import { Address } from "@/Shared/Domain/Address"

export class Company {
    name: string
    phone: Phone
    address: Address
    email: Email

    private constructor(name: string, phone: Phone, address: Address, email: Email) {
        this.name = name
        this.phone = phone
        this.address = address
        this.email = email
    }

    static create(name: string, phone: Phone, address: Address, email: Email): Company {
        return new Company(
            name,
            phone,
            address,
            email
        )
    }
}