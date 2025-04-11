export type RootStackParamList = {
    homeRoutes: undefined,
    ordersRoutes: undefined,
    customersRoutes: undefined,
    servicesRoutes: undefined,
    settingsRoutes: undefined,

    customer: { id?: number },
    
    services: undefined,
    service: { id?: number }
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
