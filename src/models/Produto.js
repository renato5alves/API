import mongoose, { mongo } from "mongoose";

const ProdutoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome:{type: String, required: true},
    categoria:{type: String},
    preco: {type: Number}
}, {versionKey: false});                        

const produto = mongoose.model("produtos", ProdutoSchema);

export default produto;