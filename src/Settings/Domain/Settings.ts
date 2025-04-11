import 'react-native-get-random-values'
import {v4 as uuidv4} from 'uuid';

import { Company } from './Company'

export class Settings {
    id: string
    company: Company

    private constructor(id: string, company: Company) {
        this.id = id
        this.company = company
    }

    static create(company: Company): Settings {
        const id = uuidv4()
        return new Settings(id, company)
    }
}