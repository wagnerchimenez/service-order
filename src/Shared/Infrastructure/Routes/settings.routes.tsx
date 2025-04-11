import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SettingsScreen } from '@/Settings/Presentation/Screens/SettingsScreen'

const { Navigator, Screen } = createNativeStackNavigator()

export function SettingsRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="settings"
                component={SettingsScreen}
            />
        </Navigator>
    )
}