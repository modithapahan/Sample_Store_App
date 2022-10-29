import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Item', ItemsSchema);