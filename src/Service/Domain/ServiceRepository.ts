import { Service } from './Service'

export const SERVICE_REPOSITORY_KEY = 'service-storage'

export interface ServiceRepository {
    save(service: Service): Promise<void>
    delete(id: string): Promise<void>
    findById(id: string): Promise<Service | undefined>
    findAll(): Promise<Service[] | undefined>
}