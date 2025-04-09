import { Service } from "../Domain/Service"
export class CreateOrderCommand {

    private customerId: string
    private services: Service[]

    constructor(customerId: string, services: Service[], date: Date) {
        this.customerId = customerId
        this.services = services
    }
}