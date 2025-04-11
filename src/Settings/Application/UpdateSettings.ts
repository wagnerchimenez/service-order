export class UpdateSettings {
    company: string
    phone: string
    address: string
    email: string

    constructor(company: string, phone: string, address: string, email: string) {
        this.company = company
        this.phone = phone
        this.address = address
        this.email = email
    }
}