import { DeleteServiceCommand } from "./DeleteServiceCommand"
import { ServiceRepository } from "../Domain/ServiceRepository"

export class DeleteServiceHandler {
    private serviceRepository: ServiceRepository

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository
    }

    async execute(command: DeleteServiceCommand): Promise<void> {
        await this.serviceRepository.delete(command.id)
    }
}