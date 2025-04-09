import AsyncStorage from "@react-native-async-storage/async-storage";

import { Repository } from "../Domain/Repository";
import { SERVICE_REPOSITORY_KEY } from "@/Service/Domain/ServiceRepository";
import { Service } from "@/Service/Domain/Service";

export class AsyncStorageRepository<T> implements Repository<T> {
    private readonly key: string

    constructor(key: string) {
        this.key = key
    }

    async save(entity: T): Promise<void> {
        try {
            const data = await AsyncStorage.getItem(this.key)
            let newData = (!data) ? [entity] : [...data, entity]
            await AsyncStorage.setItem(this.key, JSON.stringify(newData))
        } catch (error) {
            console.error(error)
        }
    }

    async findAll(): Promise<T[]> {
        throw new Error("Method not implemented.")
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.")
    }

    findById(id: string): Promise<T | undefined> {
        throw new Error("Method not implemented.")
    }
}