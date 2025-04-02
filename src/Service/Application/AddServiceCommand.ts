export class AddServiceCommand {
    readonly name: string
    readonly price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }
}