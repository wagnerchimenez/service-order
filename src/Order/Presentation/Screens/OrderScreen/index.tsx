import { useCallback, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, ScrollView, Alert } from "react-native";

import * as Icon from 'phosphor-react-native'

import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

import { Customer } from '@/Customer/Domain/Customer'
import { Service } from '@/Service/Domain/Service'
import { ListCustomerById } from '@/Customer/Application/ListCustomerById';
import { ListCustomerByIdHandler } from '@/Customer/Application/ListCustomerByIdHandler';
import { AsyncStorageCustomerRepository } from '@/Customer/Infrastructure/AsyncStorageCustomerRepository';
import { ListServiceById } from '@/Service/Application/ListServiceById';
import { ListServiceByIdHandler } from '@/Service/Application/ListServiceByIdHandler';
import { AsyncStorageServiceRepository } from '@/Service/Infrastructure/AsyncStorageServiceRepository';

import { Header } from "@/Shared/Infrastructure/Components/Header";
export function OrderScreen() {

    const navigation = useNavigation()
    const route = useRoute()

    const [customer, setCustomer] = useState<Customer | null>(null)
    const [service, setService] = useState<Service | null>(null)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(0)

    const [services, setServices] = useState<{
        id: string
        name: string
        price: number
        quantity: number
    }[]>([])

    async function getCustomer(customerId: string | null) {
        if (!customerId) {
            return
        }

        const customerRepository = new AsyncStorageCustomerRepository()
        const command = new ListCustomerById(customerId)
        const handler = new ListCustomerByIdHandler(customerRepository)

        const customer = await handler.execute(command)

        setCustomer(customer)
    }

    async function getService(serviceId: string | null) {

        if (!serviceId) {
            return
        }

        const serviceRepository = new AsyncStorageServiceRepository()
        const command = new ListServiceById(serviceId)
        const handler = new ListServiceByIdHandler(serviceRepository)

        const service = await handler.execute(command)

        if (!service) {
            return
        }

        setService(service)
        setPrice(service.price)
    }

    function addService() {

        if (!service) {
            Alert.alert('Erro ao adicionar serviço', 'Selecione um serviço')
            return
        }

        if (!quantity) {
            Alert.alert('Erro ao adicionar serviço', 'Informe a quantidade')
            return
        }

        if (!price) {
            Alert.alert('Erro ao adicionar serviço', 'Invorme o preço')
            return
        }

        const newService = {
            id: uuidv4(),
            name: service.name,
            price: price,
            quantity: quantity
        }

        setServices([...services, newService])
    }

    function removeService(serviceId: string) {
        const newServices = services.filter(service => service.id !== serviceId)
        setServices(newServices)
    }

    function formatQuantity(quantity: number) {
        setQuantity(
            !quantity ? 1 : quantity
        )
    }

    function createOrder() {
        if (!customer) {
            Alert.alert('Erro ao criar ordem de serviço', 'Informe o cliente')
            return
        }

        if (!service) {
            Alert.alert('Erro ao criar ordem de serviço', 'Adicione serviços')
            return
        }
    }

    useFocusEffect(
        useCallback(() => {
            getCustomer(route.params?.customerId)
            getService(route.params?.serviceId)
        }, [])
    )

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
                        onPress={() => navigation.navigate('selectCustomer', route.params)}
                    >
                        <Text
                            className="text-white"
                        >
                            +
                        </Text>
                    </TouchableOpacity>
                </View>

                {customer &&

                    <View
                        className="shadow-sm p-4 rounded-md gap-2 mb-2"
                    >
                        <Text>Cliente: {customer?.name}</Text>
                        <Text>Telefone: {customer?.phone.number}</Text>
                        <Text>E-mail: {customer?.email.address}</Text>
                    </View>
                }

                <View
                    className="flex-row items-center"
                >

                    <Text className="text-lg font-bold mr-2">
                        Serviço:
                    </Text>

                    <TouchableOpacity
                        className="bg-green-500 rounded-md size-6 justify-center items-center"
                        onPress={() => navigation.navigate('selectService', route.params)}
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
                            Serviço: {service?.name}
                        </Text>
                    </View>
                    <View className="flex-row items-center">
                        <TextInput
                            className="border-2 border-gray-300 rounded-md p-2 mr-2"
                            placeholder="Quantidade"
                            keyboardType="numeric"
                            onChangeText={quantity => formatQuantity(parseInt(quantity))}
                            value={quantity.toString()}
                        />
                        <TextInput
                            className="border-2 border-gray-300 rounded-md p-2 mr-2"
                            placeholder="Valor"
                            keyboardType="numeric"
                            value={price.toString()}
                            onChangeText={price => setPrice(parseFloat(price))}
                        />

                        <TouchableOpacity
                            className="bg-green-500 rounded-md size-6 justify-center items-center"
                            onPress={addService}
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
                        <View className="mb-5 border-b border-gray-300 pb-2 justify-center" key={item.id}>
                            <View className="flex-row justify-between mb-5">
                                <Text className="font-bold mb-2 max-w-[90%]">{item.name}</Text>
                                <TouchableOpacity
                                    className="bg-red-500 rounded-md items-center justify-center items-center size-6"
                                    onPress={() => removeService(item.id)}
                                >
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

            <TouchableOpacity 
                className="bg-green-500 p-2 rounded-md flex-row justify-center items-center gap-2"
                onPress={createOrder}
            >
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