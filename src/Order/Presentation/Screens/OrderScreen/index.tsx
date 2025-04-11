import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, ScrollView } from "react-native";

import * as Icon from 'phosphor-react-native'

import { Header } from "@/Shared/Infrastructure/Components/Header";

export function OrderScreen() {

    const [services, setServices] = useState<{
        name: string
        price: number
        quantity: number
    }[]>([
        {
            name: 'Retífica de cabeçote asdfasd asdf asd asf asd asd fasdf asdfasdfa das asd',
            price: 100,
            quantity: 1
        },
        {
            name: 'Retífica de cabeçote',
            price: 100,
            quantity: 2
        },
    ])

    return (
        <SafeAreaView className="flex-1 p-2">
            <Header
                title="Ordem de Serviço"
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View
                    className="flex-row items-center"
                >

                    <Text className="text-lg font-bold mr-2">
                        Cliente:
                    </Text>

                    <TouchableOpacity
                        className="bg-green-500 rounded-md size-6 justify-center items-center"
                    >
                        <Text
                            className="text-white"
                        >
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    className="shadow-sm p-4 rounded-md gap-2 mb-2"
                >
                    <Text>Cliente: Wagner Lima Chimenez</Text>
                    <Text>Telefone: (11) 99999-9999</Text>
                    <Text>Endereço: Rua das Flores, 123</Text>
                    <Text>E-mail: wagnerllchimenez.comp@gmail.com</Text>
                </View>

                <View
                    className="flex-row items-center"
                >

                    <Text className="text-lg font-bold mr-2">
                        Serviço:
                    </Text>

                    <TouchableOpacity
                        className="bg-green-500 rounded-md size-6 justify-center items-center"
                    >
                        <Text
                            className="text-white"
                        >
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    className="shadow-sm p-4 rounded-md gap-2 mb-2"
                >
                    <View className="flex-row">
                        <Text className="text-lg font-bold mr-2">
                            Selecione o serviço...
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <TextInput
                            className="border-2 border-gray-300 rounded-md p-2 mr-2"
                            placeholder="Quantidade"
                            keyboardType="numeric"
                        />
                        <TextInput
                            className="border-2 border-gray-300 rounded-md p-2 mr-2"
                            placeholder="Valor"
                            keyboardType="numeric"
                        />

                        <TouchableOpacity
                            className="bg-green-500 rounded-md size-6 justify-center items-center"
                        >
                            <Text
                                className="text-white"
                            >
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {services.map(item => {
                    return (
                        <View className="mb-5 border-b border-gray-300 pb-2 justify-center" key={item.name}>
                            <View className="flex-row justify-between mb-5">
                                <Text className="font-bold mb-2 max-w-[90%]">{item.name}</Text>
                                <TouchableOpacity className="bg-red-500 rounded-md items-center justify-center items-center size-6">
                                    <Text className="text-white" >-</Text>
                                </TouchableOpacity>
                            </View>
                            <View className="flex-row justify-between">
                                <Text>{item.quantity} x R$ {item.price}</Text>
                                <Text>R$ {item.price * item.quantity}</Text>
                            </View>
                        </View>
                    )
                })}

                <View className="flex-row justify-between mt-2">
                    <Text className="text-lg font-bold">Total</Text>
                    <Text className="text-lg font-bold">R$ {services.reduce((acc, item) => acc + item.price * item.quantity, 0)}</Text>
                </View>
            </ScrollView>

            <TouchableOpacity className="bg-green-500 p-2 rounded-md flex-row justify-center items-center gap-2">
                <Icon.Check size={24} color="white" />
                <Text className="text-white text-center">
                    Finalizar
                </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity className="bg-green-500 p-2 rounded-md flex-row justify-center items-center gap-2">
                <Icon.Share size={24} color="white" />
                <Text className="text-white text-center">
                    Compartilhar
                </Text>
            </TouchableOpacity> */}

        </SafeAreaView >
    )
}