import {ObjectId} from 'bson'
export class Class {
    constructor(
        public id: string,
        public name : String,
        public imgUrl: String,
        public teacherId : String
    ) {
        
    }
}