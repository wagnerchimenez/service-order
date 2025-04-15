import { Service } from './Service'

export const SERVICE_REPOSITORY_KEY = 'service-storage'

export interface ServiceRepository {
    save(newService: Service): Promise<void>
    findAll(): Promise<Service[]>
    findById(id: string): Promise<Service | null>
    delete(deletedService: Service): Promise<void>
}