export class Phone {
    readonly number: string

    private constructor(number: string) {
        this.number = number
    }

    static create(number: string): Phone {
        if (!this.validate(number)) {
            throw new Error('Invalid phone number')
        }
        return new Phone(number)
    }

    private static validate(number: string): boolean {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/
        return phoneRegex.test(number)
    }
}