import AsyncStorage from '@react-native-async-storage/async-storage'

import { Settings } from '../Domain/Settings'
import {
    SETTINGS_REPOSITORY_KEY,
    SettingsRepository
} from '../Domain/SettingsRepository'

export class AsyncStorageSettingsRepository implements SettingsRepository {

    async findAll(): Promise<Settings | null> {
        const settings = await AsyncStorage.getItem(SETTINGS_REPOSITORY_KEY)

        return settings ? JSON.parse(settings) : null
    }

    async save(settings: Settings): Promise<void> {
        await AsyncStorage.setItem(SETTINGS_REPOSITORY_KEY, JSON.stringify(settings))
    }
}
