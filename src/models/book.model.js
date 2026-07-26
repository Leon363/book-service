import mongoose, {Schema} from "mongoose";


const authorSchema = new Schema({
    name: { type: String, required: true },
    birthDate: { type: String, required: true }
}, {
    _id: false
});



const bookSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    authors: [
        authorSchema
    ],
    publisher: {
        type: String, required: true
    }

},  {
    versionKey: false,

    toJSON: {
        transform: (doc, ret) => {
            ret.isbn = ret._id;
            delete ret._id;
            return ret;
}
    }
})

export const Book = mongoose.model("Book", bookSchema);