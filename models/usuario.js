

const  mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre:{
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true,
        unique: true

    },
    password:{
        type: String,
        required: true,

    },
    online:{
        type: Boolean,
        default: false,

    },

});

usuarioSchema.method('toJSON', function(){
    const { __v, _id, password, ...object} = this.toObject();

    object.uid = _id;
    return object;
})

const model = mongoose.model("usuario", usuarioSchema);
module.exports = model;



