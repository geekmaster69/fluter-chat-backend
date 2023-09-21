

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mensajeSchema = new Schema({

    de: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true

    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    msg: {
        type: String,
        required: true
    }


}, {
    timestamps: true
});

mensajeSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})


module.exports = mongoose.model('Mensaje', mensajeSchema);



