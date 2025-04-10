import { ListServices } from "./ListServices";

import { Service } from "../Domain/Service";
import { ServiceRepository } from "../Domain/ServiceRepository";

export class ListServicesHandler {
    private serviceRepository: ServiceRepository

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository
    }

    async execute(command: ListServices): Promise<Service[] | undefined> {
        return this.serviceRepository.findAll()
    }
    
}