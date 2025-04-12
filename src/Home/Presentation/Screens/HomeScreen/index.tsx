import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import * as Icon from 'phosphor-react-native'

import { GetSettings } from "@/Settings/Application/GetSettings";
import { Settings } from '@/Settings/Domain/Settings'
import { Company } from '@/Settings/Domain/Company'
import { Phone } from '@/Shared/Domain/Phone'
import { Address } from '@/Shared/Domain/Address'
import { GetSettingsHandler } from "@/Settings/Application/GetSettingsHandler";
import { AsyncStorageSettingsRepository } from "@/Settings/Infrastructure/AsyncStorageSettingsRepository";
import { Email } from "@/Shared/Domain/Email";

export function HomeScreen() {

    const [settings, setSettings] = useState<Settings>(
        Settings.create(
            Company.create(
                'Nome da empresa',
                Phone.create(
                    '9999999999'
                ),
                Address.create(
                    'Endereço',
                    0,
                    '',
                    '',
                    ''
                ),
                Email.create(
                    'enderecodeemail@email.com'
                )
            )
        )
    )

    async function getSettings() {

        const settingsRepository = new AsyncStorageSettingsRepository()
        const command = new GetSettings()
        const handler = new GetSettingsHandler(settingsRepository)

        const updatedSettings = await handler.execute(command)

        if (!updatedSettings) {
            return
        }

        setSettings(updatedSettings)
    }

    useFocusEffect(
        useCallback(() => {
            getSettings()
        }, [])
    )

    return (
        <SafeAreaView className="flex-1 p-2 justify-center">

            <View>

                <View className="flex-row items-center justify-center">
                    <Icon.Car size={150} color="#000" />
                </View>

                <Text
                    className="text-2xl font-bold text-center mb-4"
                >
                    {settings.company.name}
                </Text>
                <Text
                    className="text-center"
                >
                    {settings.company.address.street}
                </Text>
                <Text
                    className="text-center"
                >
                    {settings.company.phone.number}
                </Text>

                <Text
                    className="text-center"
                >
                    {settings.company.email.address}
                </Text>
            </View>




        </SafeAreaView>
    )
}