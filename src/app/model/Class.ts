import {ObjectId} from 'mongodb'
export class Class {
    constructor(
        public id : ObjectId,
        public name : String,
        public imgUrl: String,
        public teacherId : String
    ) {
        
    }
}