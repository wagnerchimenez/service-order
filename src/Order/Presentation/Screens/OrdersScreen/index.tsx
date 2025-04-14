import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';
import * as Icon from 'phosphor-react-native';

import { Header } from "@/Shared/Infrastructure/Components/Header";

export function OrdersScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1 p-2">
            <Header
                title="Ordens de Serviço"
                onPressBack={() => navigation.navigate('homeRoutes')}
            />

            <View className="flex-1">

                <View className="mb-2">
                    <TextInput
                        placeholder="Pesquisar"
                        className="border-2 border-gray-300 rounded-md p-2"
                    />
                </View>

                <View className="border-2 border-gray-300 rounded-md p-2">

                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-lg font-bold">11/04/2025</Text>
                        </View>
                        <View className="flex-row gap-1">
                            <TouchableOpacity className="bg-green-500 rounded-md size-6 justify-center items-center">
                                <Text className="text-white">
                                    <Icon.WhatsappLogo size={15} color="white" />
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-blue-500 rounded-md size-6 justify-center items-center">
                                <Text className="text-white">
                                    <Icon.MagnifyingGlass size={15} color="white" />
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-red-500 rounded-md size-6 justify-center items-center">
                                <Text className="text-white">-</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="mt-2 gap-2">
                        <View className="flex-row gap-2">
                            <Text className="text-lg font-bold">Cliente:</Text>
                            <Text className="text-lg text-gray-900">Wagner Lima Chimenez</Text>
                        </View>
                        <View className="flex-row gap-2">
                            <Text className="text-lg font-bold">Total: </Text>
                            <Text className="text-lg text-gray-900">R$ 100,00</Text>
                        </View>

                        <Text className="text-sm text-gray-500">Pendente</Text>
                    </View>

                </View>

            </View>

            <TouchableOpacity
                className="bg-green-500 rounded-md p-2"
                onPress={() => navigation.navigate('order', {})}
            >
                <Text className="text-white text-center">
                    Nova Ordem de Serviço
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}