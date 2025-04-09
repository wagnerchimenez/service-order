export interface Repository<T> {
    save(entity: T): Promise<void>
    delete(id: string): Promise<void>
    findAll(): Promise<T[]>
    findById(id: string): Promise<T | undefined>
}