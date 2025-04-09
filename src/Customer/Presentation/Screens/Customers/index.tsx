import { useState, useEffect } from 'react'
import { Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { ListCustomers } from '@/Customer/Application/ListCustomers'
import { ListCustomersHandler } from '@/Customer/Application/ListCustomersHandler'
import { Customer } from '@/Customer/Domain/Customer'
import { InMemoryCustomerRepository } from '@/Customer/Infrastructure/InMemoryCustomerRepository'

export function Customers() {
    const [customers, setCustomers] = useState<Customer[]>([])

    const customerRepository = new InMemoryCustomerRepository()

    async function getCustomers() {
        const command = new ListCustomers()
        const handler = new ListCustomersHandler(customerRepository)
        const customers = await handler.execute(command)
        setCustomers(customers)
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <SafeAreaView>
            <Text
                className="text-2xl font-bold"
            >Customer</Text>

            <FlatList
                data={customers}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </SafeAreaView>
    )
}