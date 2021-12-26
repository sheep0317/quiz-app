import { ObjectId } from 'bson'
import { Class } from './Class';
export interface User {
    id?: ObjectId,
    name: String,
    email: String,
    phone: String,
    gender: Boolean,
    birthday: String,
    role: String,
    address: String
    recentClass: Class[]

}