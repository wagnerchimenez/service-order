import { Service } from "../Domain/Service"

export class DeleteService {
    readonly service: Service

    constructor(service: Service) {
        this.service = service
    }
}