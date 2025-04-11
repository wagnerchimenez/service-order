export class Service {
    name: string
    price: number

    private constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    static create(name: string, price: number) {
        return new Service(name, price)
    }
}