export type RootStackParamList = {
    // Home: undefined;
    // Profile: { userId: string };
    // Settings: { tab: 'account' | 'notifications' };
    customers: undefined
    customer: { id?: string }
    order: { id?: string }
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
