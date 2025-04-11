import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@/Shared/Infrastructure/Components/Header";

export function SettingsScreen() {

    const navigation = useNavigation()

    const [companyName, setCompanyName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    return (
        <SafeAreaView className="flex-1 p-2">
            <Header 
                title="Configurações" 
                onPressBack={() => navigation.navigate('home')}
            />

            <View className="flex-1 w-full gap-2">
                <TextInput
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Nome da empresa"
                    value={companyName}
                    onChangeText={setCompanyName}
                />

                <TextInput
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Telefone"
                    value={phone}
                    onChangeText={setPhone}
                />

                <TextInput
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Endereço"
                    value={address}
                    onChangeText={setAddress}
                />

                <TextInput
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <TouchableOpacity className="bg-green-500 p-2 rounded-md">
                <Text className="text-white text-center">Salvar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}