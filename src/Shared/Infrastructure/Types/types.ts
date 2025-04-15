export type RootStackParamList = {
    homeRoutes: undefined,
    ordersRoutes: undefined,
    customersRoutes: undefined,
    servicesRoutes: undefined,
    settingsRoutes: undefined,

    customers: undefined,
    customer: { id?: number },
    
    services: undefined,
    service: { id?: number },

    orders: undefined,
    order: { id?: number },
    selectCustomer: undefined,
    selectService: undefined
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
