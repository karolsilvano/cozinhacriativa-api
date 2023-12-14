const mongoose = require("mongoose");

const { Schema } = mongoose;

const receitaSchema = new Schema({
    nome_receita:{
        type:String,   //nome da receita
        required: false
    },
    apresentacao:{
        type:String,   //apresentação da receita
        required:false,
        maxlength:100 // maximo de caracteres para a apresentação
    },
    tempo_preparo:{
        type: [{
            horas_receita: {
                type: Number, 
                required: false
                }, 
            minutos: {
                type: Number,
                required: false
            }
        }],
        //  required:true
    },

    ingredientes:{
        type:[{
            descricao:{
                type: String,       //descrição do ingrediente
                required: false
            }
        }],
    },

    modo_de_preparo:{
        type: [{
            passo:{
                type: String,         //passos para preparar a receita
                required: false
            }
        }] ,
         required: false
    },
    

    categoria:{
        type: String,
        required: false,
        enum: ['Refeição', 'Doce/Sobremesa', 'Bebida', 'Salgados', 'Lanches']
    },
},
    {timestamps: true}
);

const Receita = mongoose.model("Receita", receitaSchema);

module.exports = {
    Receita, 
    receitaSchema, 
};
