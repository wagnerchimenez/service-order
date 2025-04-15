import { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


import { ListCustomers } from '@/Customer/Application/ListCustomers'
import { ListCustomersHandler } from '@/Customer/Application/ListCustomersHandler'
import { Customer } from '@/Customer/Domain/Customer'
import { AsyncStorageCustomerRepository } from '@/Customer/Infrastructure/AsyncStorageCustomerRepository'

import { Header } from '@/Shared/Infrastructure/Components/Header'

export function SelectCustomerScreen() {

    const navigation = useNavigation()

    const [customers, setCustomers] = useState<Customer[]>([])

    const customerRepository = new AsyncStorageCustomerRepository()

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
        <SafeAreaView className="flex-1 p-2">

            <Header
                title="Selecionar Cliente"
                onPressBack={() => navigation.navigate('order')}
            />

            <View className="flex-1 w-full">
                <FlatList
                    data={customers}
                    renderItem={({ item }) => {
                        return (
                            <View className="border border-gray-300 rounded-md p-4 m-2">
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-lg font-bold">{item.name}</Text>
                                    <Text className="text-sm text-gray-500">{item.email.address}</Text>
                                </View>
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-sm text-gray-500">{item.phone.number}</Text>

                                    <TouchableOpacity
                                        className="bg-red-500 p-2 rounded-md"
                                        onPress={() => { navigation.navigate('order', {
                                            customer: item
                                        }) }}
                                    >
                                        <Text className="text-white text-sm font-bold">Selecionar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}