import { GetAllServicesQuery } from "./GetAllServicesQuery";

import { Service } from "../Domain/Service";
import { ServiceRepository } from "../Domain/ServiceRepository";

export class GetAllServicesQueryHandler {
    private serviceRepository: ServiceRepository

    constructor(serviceRepository: ServiceRepository) {
        this.serviceRepository = serviceRepository
    }

    async execute(command: GetAllServicesQuery): Promise<Service[] | undefined> {
        return this.serviceRepository.findAll()
    }
    
}