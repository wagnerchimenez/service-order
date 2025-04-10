import { DeleteService } from "./DeleteService"
import { ServiceRepository } from "../Domain/ServiceRepository"

export class DeleteServiceHandler {
    private serviceRepository: ServiceRepository

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository
    }

    async execute(command: DeleteService): Promise<void> {
        await this.serviceRepository.delete(command.service)
    }
}