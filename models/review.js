require('./user');

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    rating: {
        type: String,
        required: true, 
    },
    timestamps: true,
})

module.exports = reviewSchema