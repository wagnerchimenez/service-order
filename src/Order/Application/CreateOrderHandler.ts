import { CreateOrderCommand } from "./CreateOrderCommand"

export class CreateOrderHandler {

    private orderRepository: OrderRepository


    constructor(orderRepository: OrderRepository) {
        this.orderRepository = orderRepository
    }

    async execute(command: CreateOrderCommand) {
        const order = new Order(command.customerId, command.services, command.date)
        await this.orderRepository.save(order)
    }
    
    
}