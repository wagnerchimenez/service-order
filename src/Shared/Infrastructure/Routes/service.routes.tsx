import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ServicesScreen } from '@/Service/Presentation/Screens/ServicesScreen';
import { ServiceScreen } from '@/Service/Presentation/Screens/ServiceScreen';

const { Navigator, Screen } = createNativeStackNavigator()

export function ServiceRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="services"
                component={ServicesScreen}
            />
            <Screen
                name="service"
                component={ServiceScreen}
            />
        </Navigator>
    )
}