import { Service } from '@/Service/Domain/Service'

import { AddServiceCommand } from '@/Service/Application/AddServiceCommand'
import { AddServiceHandler } from '@/Service/Application/AddServiceHandler'

test('should add a service', () => {

    const expectedService = Service.create(
        'Service name',
        50.25
    )

    const mockRepository = {
        save: jest.fn().mockResolvedValue(expectedService),
        findAll: jest.fn().mockResolvedValue([expectedService])
    }

    const command = new AddServiceCommand(
        'Service name',
        50.25
    )

    const handler = new AddServiceHandler(
        mockRepository
    )

    async () => await handler.execute(command)

    const services = async () => {
        const result = await mockRepository.findAll()
        expect(result).toHaveLength(1)   
    }

    services()
})