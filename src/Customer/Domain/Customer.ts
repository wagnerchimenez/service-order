import 'react-native-get-random-values'
import {v4 as uuidv4} from 'uuid';

import { Email } from "@/Shared/Domain/Email"
import { Phone } from "@/Shared/Domain/Phone"

export class Customer {
    id: string
    name: string
    email: Email
    phone: Phone

    private constructor(id: string, name: string, email: Email, phone: Phone) {
        this.id = id
        this.name = name
        this.email = email
        this.phone = phone
    }

    static create(name: string, email: Email, phone: Phone): Customer {
        const id = uuidv4()
        return new Customer(id, name, email, phone)
    }
}