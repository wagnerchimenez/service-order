import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CustomersScreen } from '@/Customer/Presentation/Screens/CustomersScreen';
import { CustomerScreen } from '@/Customer/Presentation/Screens/CustomerScreen';

const { Navigator, Screen } = createNativeStackNavigator()

export function CustomerRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="customers"
                component={CustomersScreen}
            />
            <Screen
                name="customer"
                component={CustomerScreen}
            />
        </Navigator>
    )
}