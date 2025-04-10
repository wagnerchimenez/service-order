import { CreateService } from "./CreateService"
import { Service } from "../Domain/Service"
import { ServiceRepository } from "../Domain/ServiceRepository"

export class CreateServiceHandler {

    private serviceRepository: ServiceRepository

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository
    }

    async execute(command: CreateService): Promise<void> {
        const service = Service.create(command.name, command.price)
        await this.serviceRepository.save(service)
    }
}