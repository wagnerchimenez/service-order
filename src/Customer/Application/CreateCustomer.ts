import { Email } from "@/Shared/Domain/Email"
import { Phone } from "@/Shared/Domain/Phone"

export class CreateCustomer {
    readonly name: string
    readonly email: Email
    readonly phone: Phone

    constructor(name: string, email: Email, phone: Phone) {
        this.name = name
        this.email = email
        this.phone = phone
    }
}