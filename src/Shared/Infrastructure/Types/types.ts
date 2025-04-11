export type RootStackParamList = {
    // Home: undefined;
    // Profile: { userId: string };
    // Settings: { tab: 'account' | 'notifications' };
    customers: undefined
    customer: { id?: string }
    services: undefined
    order: { id?: string },
    service: { id?: string }
    orders: undefined
    home: undefined,
    settings: undefined
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
