export class Email {
    readonly address: string

    private constructor(address: string) {
        this.address = address
    }

    static create(address: string): Email {
        if (!this.validate(address)) {
            throw new Error('Invalid email address')
        }
        return new Email(address)
    }

    private static validate(address: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(address)
    }
}