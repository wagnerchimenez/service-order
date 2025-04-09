import { useState, useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native'
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
        <SafeAreaView
            className="flex-1 items-center"
        >
            <Text
                className="text-4xl font-bold mt-4 mb-4"
            >
                Clientes
            </Text>

            <View className="flex-1 w-full">
                <FlatList
                    data={customers}
                    renderItem={({ item }) => {
                        return (
                            <View className="border border-gray-300 rounded-md p-4 m-2">
                                <View className="flex-row justify-between">
                                    <Text className="text-lg font-bold">{item.name}</Text>
                                    <Text className="text-sm text-gray-500">{item.email.address}</Text>
                                </View>
                                <View className="flex-row justify-between">
                                    <Text className="text-sm text-gray-500">{item.phone.number}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>

            <TouchableOpacity
                className="bg-green-500 p-4 rounded-md w-full items-center"
                onPress={() => {
                    console.log('Adicionar Cliente')
                }}
            >
                <Text
                    className="text-white text-lg font-bold"
                >
                    Adicionar Cliente
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}