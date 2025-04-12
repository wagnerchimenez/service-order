import { Settings } from '@/Settings/Domain/Settings'

export const SETTINGS_REPOSITORY_KEY = 'settings-storage'

export interface SettingsRepository {
    findAll(): Promise<Settings | null>
    save(settings: Settings): Promise<void>
}