import { Settings } from '@/Settings/Domain/Settings'

export interface SettingsRepository {
    save(settings: Settings): Promise<void>
}