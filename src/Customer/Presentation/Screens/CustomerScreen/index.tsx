import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Alert
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as Icon from "phosphor-react-native";

import { Header } from "@/Shared/Infrastructure/Components/Header";

import { Customer } from "@/Customer/Domain/Customer";
import { Email } from "@/Shared/Domain/Email";
import { Phone } from "@/Shared/Domain/Phone";

import { AsyncStorageCustomerRepository } from "@/Customer/Infrastructure/AsyncStorageCustomerRepository";

export function CustomerScreen() {
    const navigation = useNavigation()

    const customerRepository = new AsyncStorageCustomerRepository()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    function formatPhone(phone: string) {
        setPhone(
            phone.replace(/[^0-9]/, '')
        )
    }

    async function saveCustomer() {
        try {
            const customer = Customer.create(
                name,
                Email.create(email),
                Phone.create(phone)
            )

            await customerRepository.save(customer)
            navigation.navigate('customers')

        } catch (error: unknown) {
            Alert.alert(
                'Erro ao salvar cliente',
                error instanceof Error ?
                    error.message :
                    'Erro desconhecido'
            )
        }
    }

    return (
        <SafeAreaView
            className="flex-1 p-2"
        >

            <Header
                title="Cliente"
                onPressBack={() => {
                    navigation.navigate('customers')
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
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput
                    className="border border-gray-300 rounded-md p-2 w-full"
                    placeholder="Telefone"
                    keyboardType="numeric"
                    value={phone}
                    onChangeText={formatPhone}
                    maxLength={11}
                />

            </View>

            <TouchableOpacity
                className="bg-green-500 p-4 rounded-md w-full items-center"
                onPress={saveCustomer}
            >
                <Text className="text-white text-lg font-bold">Salvar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}