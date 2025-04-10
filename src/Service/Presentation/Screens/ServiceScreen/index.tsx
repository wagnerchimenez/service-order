import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/Shared/Infrastructure/Components/Header";
import { useNavigation } from "@react-navigation/native";

import { Service } from '@/Service/Domain/Service'
import { AsyncStorageServiceRepository } from '@/Service/Infrastructure/AsyncStorageServiceRepository'

export function ServiceScreen() {
    const navigation = useNavigation()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const serviceRepository = new AsyncStorageServiceRepository()

    function formatPrice(price: string) {
        setPrice(
            price.replace(/[^0-9.]/g, '')
        )
    }

    async function saveService() {
        try {
            const service = Service.create(
                name,
                Number(price)
            )

            await serviceRepository.save(service)
            navigation.navigate('services')

        } catch (error: unknown) {
            Alert.alert(
                'Erro ao salvar serviço',
                error instanceof Error ?
                    error.message :
                    'Erro desconhecido'
            )
        }
    }

    return (
        <SafeAreaView className="flex-1 p-2">
            <Header
                title="Serviço"
                onPressBack={() => {
                    navigation.navigate('services')
                }}
            />

            <View
                className="flex-1 w-full gap-2"
            >
                <TextInput
                    className="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    className="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Preço"
                    value={price}
                    onChangeText={formatPrice}
                    keyboardType="numeric"
                />

            </View>

            <TouchableOpacity
                className="bg-green-500 p-4 rounded-md w-full items-center"
                onPress={saveService}
            >
                <Text className="text-white text-lg font-bold">Salvar</Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}