import { ObjectId } from 'bson'
export interface User {
    id: ObjectId,
    name: String,
    email: String,
    phone: String,
    gender: Boolean,
    birthday: String,
    role: String,
    address: String


}