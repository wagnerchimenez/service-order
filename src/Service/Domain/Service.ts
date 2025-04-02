export class Service {
    readonly id: string
    readonly name: string
    readonly price: number

    private constructor(id: string, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }

    static create(name: string, price: number): Service {
        if (!name || !price) {
            throw new Error("Invalid service parameters")
        }

        const id = `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`
        return new Service(id, name, price)
    }

    static fromStoredData(data: { id: string, name: string, price: number }): Service {
        return new Service(data.id, data.name, data.price)
    }

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }
}
