import AsyncStorage from '@react-native-async-storage/async-storage'

import { Customer } from "../Domain/Customer"
import { CustomerRepository } from "../Domain/CustomerRepository"

export class AsyncStorageCustomerRepository implements CustomerRepository {
    readonly CUSTOMER_KEY = 'customers'

    async save(customer: Customer): Promise<void> {

        const customers = await AsyncStorage.getItem(this.CUSTOMER_KEY)

        if (!customers) {
            await AsyncStorage.setItem(this.CUSTOMER_KEY, JSON.stringify([customer]))
            return
        }

        const customersArray = JSON.parse(customers)
        const nameExists = customersArray.find((customer: Customer) => customer.name.toLowerCase() === customer.name.toLowerCase())

        if (nameExists) {
            throw new Error('Cliente já cadastrado')
        }

        const emailExists = customersArray.find((customer: Customer) => customer.email.address === customer.email.address)

        if (emailExists) {
            throw new Error('Email já cadastrado')
        }

        const phoneExists = customersArray.find((customer: Customer) => customer.phone.number === customer.phone.number)

        if (phoneExists) {
            throw new Error('Telefone já cadastrado')
        }

        customersArray.push(customer)
        await AsyncStorage.setItem(this.CUSTOMER_KEY, JSON.stringify(customersArray))
    }

    async delete(customer: Customer): Promise<void> {
        const customers = await AsyncStorage.getItem(this.CUSTOMER_KEY)
        const customersArray = JSON.parse(customers || '[]')
        const filteredCustomers = customersArray.filter((customer: Customer) => customer.id !== customer.id)
        await AsyncStorage.setItem(this.CUSTOMER_KEY, JSON.stringify(filteredCustomers))
    }

    async findAll(): Promise<Customer[]> {
        const customers = await AsyncStorage.getItem(this.CUSTOMER_KEY)
        return JSON.parse(customers || '[]')
    }
}
