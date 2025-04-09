import { Service } from "@/Service/Domain/Service"

export class Order {
    customer: Customer
    services: Service[]
    date: Date

    constructor(customer: Customer, services: Service[], date: Date) {
        this.customer = customer
        this.services = services
        this.date = date
}