import AsyncStorage from '@react-native-async-storage/async-storage'

import { Customer } from "../Domain/Customer"
import { CustomerRepository } from "../Domain/CustomerRepository"

export class AsyncStorageCustomerRepository implements CustomerRepository {
    readonly CUSTOMER_KEY = 'customers'

    async save(newCustomer: Customer): Promise<void> {

        const customers = await AsyncStorage.getItem(this.CUSTOMER_KEY)

        if (!customers) {
            await AsyncStorage.setItem(this.CUSTOMER_KEY, JSON.stringify([newCustomer]))
            return
        }

        const customersArray = JSON.parse(customers)
        const nameExists = customersArray.find((customer: Customer) => customer.name.trim().toLowerCase() === newCustomer.name.trim().toLowerCase())

        if (nameExists) {
            throw new Error('Cliente já cadastrado')
        }

        const emailExists = customersArray.find((customer: Customer) => customer.email.address === newCustomer.email.address)

        if (emailExists) {
            throw new Error('Email já cadastrado')
        }

        const phoneExists = customersArray.find((customer: Customer) => customer.phone.number === newCustomer.phone.number)

        if (phoneExists) {
            throw new Error('Telefone já cadastrado')
        }

        customersArray.push(newCustomer)
        await AsyncStorage.setItem(this.CUSTOMER_KEY, JSON.stringify(customersArray))
    }

    async delete(deletedCustomer: Customer): Promise<void> {
        const customers = await AsyncStorage.getItem(this.CUSTOMER_KEY)
        const customersArray = JSON.parse(customers || '[]')
        const filteredCustomers = customersArray.filter((customer: Customer) => customer.id !== deletedCustomer.id)
        await AsyncStorage.setItem(this.CUSTOMER_KEY, JSON.stringify(filteredCustomers))
    }

    async findAll(): Promise<Customer[]> {
        const customers = await AsyncStorage.getItem(this.CUSTOMER_KEY)
        return JSON.parse(customers || '[]')
    }
}
