import AsyncStorage from '@react-native-async-storage/async-storage'

import { Settings } from '../Domain/Settings'
import { SettingsRepository } from '../Domain/SettingsRepository'

export class AsyncStorageSettingsRepository implements SettingsRepository {

    async save(settings: Settings): Promise<void> {


    }
}
