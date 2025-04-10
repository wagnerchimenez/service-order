import { Service } from './Service'

export const SERVICE_REPOSITORY_KEY = 'service-storage'

export interface ServiceRepository {
    save(newService: Service): Promise<void>
    findAll(): Promise<Service[]>
    delete(deletedService: Service): Promise<void>
}