import { useState, useEffect } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useNavigation } from '@react-navigation/native'

import { ListCustomers } from '@/Customer/Application/ListCustomers'
import { ListCustomersHandler } from '@/Customer/Application/ListCustomersHandler'
import { DeleteCustomer } from '@/Customer/Application/DeleteCustomer'
import { DeleteCustomerHandler } from '@/Customer/Application/DeleteCustomerHandler'
import { Customer } from '@/Customer/Domain/Customer'
import { AsyncStorageCustomerRepository } from '@/Customer/Infrastructure/AsyncStorageCustomerRepository'

export function CustomersScreen() {
    const navigation = useNavigation()

    const [customers, setCustomers] = useState<Customer[]>([])

    const customerRepository = new AsyncStorageCustomerRepository()

    async function getCustomers() {
        const command = new ListCustomers()
        const handler = new ListCustomersHandler(customerRepository)
        const customers = await handler.execute(command)

        setCustomers(customers)
    }

    async function deleteCustomer(customer: Customer) {

        Alert.alert(
            'Remover Cliente',
            'Tem certeza que deseja remover este cliente?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Remover', onPress: async () => {

                        const command = new DeleteCustomer(customer)
                        const handler = new DeleteCustomerHandler(customerRepository)
                        await handler.execute(command)

                        getCustomers()
                    }
                }
            ]
        )
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <SafeAreaView
            className="flex-1 items-center p-2"
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
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-lg font-bold">{item.name}</Text>
                                    <Text className="text-sm text-gray-500">{item.email.address}</Text>
                                </View>
                                <View className="flex-row justify-between items-center">
                                    <Text className="text-sm text-gray-500">{item.phone.number}</Text>

                                    <TouchableOpacity
                                        className="bg-red-500 p-2 rounded-md"
                                        onPress={() => deleteCustomer(item)}
                                    >
                                        <Text className="text-white text-sm font-bold">x</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>

            <TouchableOpacity
                className="bg-green-500 p-4 rounded-md w-full items-center"
                onPress={() => {
                    navigation.navigate('customer', {})
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