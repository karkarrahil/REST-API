const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, maxlength: [10, 'minimum length is 10'], required: true },
    products: {
        name: { type: String, required: true },
        id: { type: String, required: true }
    },
    email: { type: String, required: true },
    id: { type: Number, required: [true, 'id is required'], unique: true },
    role: { type: String, required: true }
})


exports.User = mongoose.model('User', userSchema);
