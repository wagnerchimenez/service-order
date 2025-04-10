import { Email } from "@/Shared/Domain/Email"

test('should create a valid email', () => {
    const email = Email.create('test@example.com')
    expect(email).toBeDefined()
})

test('should throw an error if the email is invalid', () => {
    expect(() => Email.create('invalid-email')).toThrow('')
})

test('should get the email address', () => {
    const email = Email.create('test@example.com')
    expect(email.address).toBe('test@example.com')
})