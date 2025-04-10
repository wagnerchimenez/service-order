import AsyncStorage from "@react-native-async-storage/async-storage";

import { Service } from "../Domain/Service";
import { ServiceRepository } from "../Domain/ServiceRepository";

import { SERVICE_REPOSITORY_KEY } from "../Domain/ServiceRepository";

export class AsyncStorageServiceRepository implements ServiceRepository {

    async save(newService: Service): Promise<void> {
        const services = await AsyncStorage.getItem(SERVICE_REPOSITORY_KEY)

        if (!services) {
            await AsyncStorage.setItem(SERVICE_REPOSITORY_KEY, JSON.stringify([newService]))
            return
        }

        const servicesArray = JSON.parse(services)
        const nameExists = servicesArray.find((service: Service) => service.name === newService.name)

        if (nameExists) {
            throw new Error('Serviço já cadastrado')
        }

        servicesArray.push(newService)
        await AsyncStorage.setItem(SERVICE_REPOSITORY_KEY, JSON.stringify(servicesArray))
    }

    async delete(deletedService: Service): Promise<void> {
        const services = await AsyncStorage.getItem(SERVICE_REPOSITORY_KEY)
        const servicesArray = JSON.parse(services || '[]')
        const filteredServices = servicesArray.filter((service: Service) => service.id !== deletedService.id)
        await AsyncStorage.setItem(SERVICE_REPOSITORY_KEY, JSON.stringify(filteredServices))
    }

    async findAll(): Promise<Service[]> {
        const services = await AsyncStorage.getItem(SERVICE_REPOSITORY_KEY)
        return JSON.parse(services || '[]')
    }
}