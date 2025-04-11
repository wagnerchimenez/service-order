import { View, TextInput, Text, TouchableOpacity } from 'react-native'

import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@/Shared/Infrastructure/Components/Header";

export function OrdersScreen() {
    return (
        <SafeAreaView className="flex-1 p-2">
            <Header
                title="Ordens de Serviço"
            />

            <View className="mb-2">
                <TextInput
                    placeholder="Pesquisar"
                    className="border-2 border-gray-300 rounded-md p-2"
                />
            </View>



            <View className="border-2 border-gray-300 rounded-md p-2">

                <View className="flex-row justify-between">
                    <Text className="text-lg font-bold">11/04/2025</Text>
                    <TouchableOpacity className="bg-red-500 rounded-md size-6 justify-center items-center">
                        <Text className="text-white">-</Text>
                    </TouchableOpacity>
                </View>

                <View className="mt-2 gap-2">
                    <Text className="text-lg font-bold">Wagner Lima Chimenez</Text>

                    <View className="flex-row gap-2">
                        <Text className="font-bold">Total: </Text>
                        <Text>R$ 100,00</Text>
                    </View>

                    <Text className="text-sm text-gray-500">Pendente</Text>
                </View>

            </View>






        </SafeAreaView>
    )
}