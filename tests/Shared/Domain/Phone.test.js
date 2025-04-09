import { Phone } from "@/Shared/Domain/Phone"

test('should create a valid phone number', () => {
    const phone = Phone.create('+1234567890')
    expect(phone).toBeDefined()
})

test('should throw an error if the phone number is invalid', () => {
    expect(() => Phone.create('invalid-phone-number')).toThrow('Invalid phone number')
})

test('should get the phone number', () => {
    const phone = Phone.create('+1234567890')
    expect(phone.number).toBe('+1234567890')
})