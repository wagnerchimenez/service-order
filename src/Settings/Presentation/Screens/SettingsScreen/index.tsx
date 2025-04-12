import { useState, useCallback } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Header } from "@/Shared/Infrastructure/Components/Header";

import { GetSettings } from "@/Settings/Application/GetSettings";
import { GetSettingsHandler } from "@/Settings/Application/GetSettingsHandler";
import { UpdateSettings } from "@/Settings/Application/UpdateSettings";
import { UpdateSettingsHandler } from "@/Settings/Application/UpdateSettingsHandler";
import { AsyncStorageSettingsRepository } from "@/Settings/Infrastructure/AsyncStorageSettingsRepository";

export function SettingsScreen() {

    const navigation = useNavigation()

    const [companyName, setCompanyName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    function formatPhone(phone: string) {
        setPhone(
            phone.replace(/[^0-9]/, '')
        )
    }

    async function saveSettings() {

        try {

            const settingsRepository = new AsyncStorageSettingsRepository()

            const command = new UpdateSettings(
                companyName,
                phone,
                address,
                email
            )

            const handler = new UpdateSettingsHandler(settingsRepository)

            await handler.execute(command)

            setCompanyName('')
            setPhone('')
            setAddress('')
            setEmail('')

            navigation.navigate('homeRoutes')

        } catch (error: unknown) {
            Alert.alert(
                'Erro ao salvar configurações',
                error instanceof Error ?
                    error.message :
                    'Erro desconhecido'
            )
        }
    }

    async function getSettings() {

        const settingsRepository = new AsyncStorageSettingsRepository()
        const command = new GetSettings()
        const handler = new GetSettingsHandler(settingsRepository)

        const updatedSettings = await handler.execute(command)

        if (!updatedSettings) {
            return
        }

        setCompanyName(updatedSettings.company.name)
        setPhone(updatedSettings.company.phone.number)
        setAddress(updatedSettings.company.address.street)
        setEmail(updatedSettings.company.email.address)
    }

    useFocusEffect(
        useCallback(() => {
            getSettings()
        }, [])
    )

    return (
        <SafeAreaView className="flex-1 p-2">
            <Header
                title="Configurações"
                onPressBack={() => navigation.navigate('homeRoutes')}
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
                    onChangeText={formatPhone}
                    keyboardType="numeric"
                    maxLength={11}
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

            <TouchableOpacity
                className="bg-green-500 p-2 rounded-md"
                onPress={saveSettings}
            >
                <Text className="text-white text-center">Salvar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}