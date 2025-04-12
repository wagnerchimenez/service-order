import { GetSettings } from "./GetSettings";
import { SettingsRepository } from "../Domain/SettingsRepository";
import { Settings } from '../Domain/Settings'

export class GetSettingsHandler {
    private settingsRepository: SettingsRepository

    constructor(settingsRepository: SettingsRepository) {
        this.settingsRepository = settingsRepository
    }

    async execute(command: GetSettings): Promise<Settings | null> {
        return await this.settingsRepository.findAll()
    }
}