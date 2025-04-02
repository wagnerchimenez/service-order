import { AddServiceCommand } from "./AddServiceCommand"
import { Service } from "../Domain/Service"
import { ServiceRepository } from "../Domain/ServiceRepository"

export class AddServiceHandler {

    private serviceRepository: ServiceRepository

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository
    }

    async execute(command: AddServiceCommand): Promise<void> {
        const service = Service.create(command.name, command.price)
        await this.serviceRepository.save(service)
    }
}