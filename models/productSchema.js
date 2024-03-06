const Schema = require('mongoose').Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        default: URL,
    },
    review: {
        type: Schema.Types.ObjectId, 
        ref: "Review",
    },
})

module.exports = productSchema