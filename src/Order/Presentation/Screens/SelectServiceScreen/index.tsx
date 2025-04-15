import { useState, useEffect } from 'react'
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Service } from '@/Service/Domain/Service'
import { ListServices } from '@/Service/Application/ListServices';
import { ListServicesHandler } from '@/Service/Application/ListServicesHandler';

import { Header } from "@/Shared/Infrastructure/Components/Header";
import { AsyncStorageServiceRepository } from '@/Service/Infrastructure/AsyncStorageServiceRepository';

export function SelectServiceScreen() {

    const navigation = useNavigation()
    const route = useRoute()

    const [services, setServices] = useState<Service[]>([])

    async function getServices() {
        const serviceRepository = new AsyncStorageServiceRepository()
        const command = new ListServices()
        const handler = new ListServicesHandler(serviceRepository)
        const services = await handler.execute(command)

        setServices(services)
    }

    useEffect(() => {
        getServices()
    }, [])

    return (
        <SafeAreaView className="flex-1 p-2">
            <Header
                title="Selecionar Serviço"
                onPressBack={() => navigation.navigate('order', route.params)}
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
                                        onPress={() => {
                                            navigation.navigate('order', {
                                                ...route.params,
                                                serviceId: item.id
                                            })
                                        }}
                                    >
                                        <Text
                                            className="p-2 rounded bg-green-500 font-bold text-white"
                                        >
                                            Selecionar
                                        </Text>
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