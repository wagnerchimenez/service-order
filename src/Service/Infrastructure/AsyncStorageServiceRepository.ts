import AsyncStorage from "@react-native-async-storage/async-storage";

import { Service } from "../Domain/Service";
import { ServiceRepository } from "../Domain/ServiceRepository";

import { SERVICE_REPOSITORY_KEY } from "../Domain/ServiceRepository";

export class AsyncStorageServiceRepository implements ServiceRepository {

    async save(service: Service): Promise<void> {
        try {
            const servicesStored = await AsyncStorage.getItem(SERVICE_REPOSITORY_KEY)
            let services = (!servicesStored) ? [service] : [...servicesStored, service]
            await AsyncStorage.setItem(SERVICE_REPOSITORY_KEY, JSON.stringify(services))
        } catch (error) {
            console.error(error)
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const servicesStored = await AsyncStorage.getItem(SERVICE_REPOSITORY_KEY)
            const services = servicesStored ? JSON.parse(servicesStored) : []
            const servicesFiltered = services.filter((service: Service) => service.id !== id)
            await AsyncStorage.setItem(SERVICE_REPOSITORY_KEY, JSON.stringify(servicesFiltered))
        } catch (error) {
            console.log(error)
        }
    }

    async findById(id: string): Promise<Service | undefined> {
        try {
            const servicesStored = await AsyncStorage.getItem(SERVICE_REPOSITORY_KEY)
            const services = servicesStored ? JSON.parse(servicesStored) : []
            const service = services.find((service: Service) => service.id === id)
            return service ? Service.fromStoredData(service) : undefined
        } catch (error) {
            console.log(error)
        }
    }

    async findAll(): Promise<Service[] | undefined> {
        try {
            const servicesStored = await AsyncStorage.getItem(SERVICE_REPOSITORY_KEY)
            const services = servicesStored ? JSON.parse(servicesStored) : []

            return services.map((service: Service) => Service.fromStoredData(service))
        } catch (error) {
            console.log(error)
        }
    }
}