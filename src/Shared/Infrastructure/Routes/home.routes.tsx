import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Icon from 'phosphor-react-native'

import { HomeScreen } from '@/Home/Presentation/Screens/HomeScreen';
import { SettingsScreen } from '@/Settings/Presentation/Screens/SettingsScreen';
import { OrdersScreen } from '@/Order/Presentation/Screens/OrdersScreen';
import { CustomersScreen } from '@/Customer/Presentation/Screens/CustomersScreen';
const { Navigator, Screen } = createBottomTabNavigator()

export function HomeTabs() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon.House size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name="orders"
                component={OrdersScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon.ClipboardText size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name="customers"
                component={CustomersScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon.Users size={size} color={color} />
                    ),
                }}
            />
            <Screen
                name="settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon.Gear size={size} color={color} />
                    ),
                }}
            />
        </Navigator>
    )
}