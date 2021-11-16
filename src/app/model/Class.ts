import {ObjectId} from 'bson'
export class Class {
    constructor(
        public id : ObjectId,
        public name : String,
        public imgUrl: String,
        public teacherId : String
    ) {
        
    }
}