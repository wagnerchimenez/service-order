import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Service } from '@/Service/Domain/Service'

import { FlatList } from 'react-native'
import { Header } from '@/Shared/Infrastructure/Components/Header'
import { useNavigation } from '@react-navigation/native'

import { AsyncStorageServiceRepository } from '@/Service/Infrastructure/AsyncStorageServiceRepository'
import { ListServices } from '@/Service/Application/ListServices'
import { ListServicesHandler } from '@/Service/Application/ListServicesHandler'
import { DeleteService } from '@/Service/Application/DeleteService'
import { DeleteServiceHandler } from '@/Service/Application/DeleteServiceHandler'

export function ServicesScreen() {
    const navigation = useNavigation()

    const [services, setServices] = useState<Service[]>([])

    const serviceRepository = new AsyncStorageServiceRepository()

    async function getServices() {
        const command = new ListServices()
        const handler = new ListServicesHandler(serviceRepository)
        const services = await handler.execute(command)

        setServices(services || [])
    }

    async function deleteService(service: Service) {

        Alert.alert(
            'Remover Serviço',
            'Tem certeza que deseja remover este serviço?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Remover', onPress: async () => {

                        const command = new DeleteService(service)
                        const handler = new DeleteServiceHandler(serviceRepository)
                        await handler.execute(command)

                        getServices()
                    }
                }
            ]
        )
    }

    useEffect(() => {
        getServices()
    }, [])

    return (
        <SafeAreaView className="flex-1 p-2">
            <Header
                title="Serviços"
            />

            <View className="flex-1 w-full">

                <FlatList
                    data={services}
                    renderItem={({ item }) => {
                        return (
                            <View className="border border-gray-300 rounded-md p-4 m-2">
                                <View className="flex-row items-center justify-between">
                                    <Text
                                        className="text-lg font-bold"
                                    >
                                        {item.name}
                                    </Text>
                                    <Text
                                        className="text-lg font-bold"
                                    >
                                        R$ {item.price}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => deleteService(item)}
                                    >
                                        <Text
                                            className="p-2 rounded bg-red-500 font-bold text-white"
                                        >
                                            x
                                        </Text>
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
                    navigation.navigate('service', {})
                }}
            >
                <Text
                    className="text-white text-lg font-bold"
                >
                    Adicionar Serviço
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}