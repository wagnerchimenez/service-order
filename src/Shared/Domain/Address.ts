export class Address {
    street: string
    number: number
    neighborhood: string
    city: string
    state: string

    private constructor(street: string, number: number, neighborhood: string, city: string, state: string) {
        this.street = street
        this.number = number
        this.neighborhood = neighborhood
        this.city = city
        this.state = state
    }

    static create(street: string, number: number, neighborhood: string, city: string, state: string): Address {

        if (street.length == 0) {
            throw new Error('Endereço inválido')
        }

        return new Address(
            street,
            number,
            neighborhood,
            city,
            state
        )
    }
}