import { Service } from "../Domain/Service";
import { ListServiceById } from "./ListServiceById";
import { ServiceRepository } from "../Domain/ServiceRepository";

export class ListServiceByIdHandler {

    serviceRepository: ServiceRepository

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository
    }

    async execute(command: ListServiceById): Promise<Service | null> {
        return this.serviceRepository.findById(command.serviceId)
    }
}