import { SettingsRepository } from '@/Settings/Domain/SettingsRepository'

import { UpdateSettings } from './UpdateSettings'
import { Settings } from '@/Settings/Domain/Settings'
import { Company } from '../Domain/Company'

import { Phone } from '@/Shared/Domain/Phone'
import { Email } from '@/Shared/Domain/Email'
import { Address } from '@/Shared/Domain/Address'

export class UpdateSettingsHandler {
    private settingsRepository: SettingsRepository

    constructor(settingsRepository: SettingsRepository) {
        this.settingsRepository = settingsRepository
    }

    async execute(command: UpdateSettings): Promise<void> {

        const email = Email.create(
            command.email
        )

        const phone = Phone.create(
            command.phone
        )

        const address = Address.create(
            command.address,
            0,
            '',
            '',
            ''
        )

        const company = Company.create(
            command.company,
            phone,
            address,
            email
        )

        const settings = Settings.create(company)

        this.settingsRepository.save(settings)
    }
}