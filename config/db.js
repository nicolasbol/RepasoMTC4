const mongoose = require("mongoose");

const conectarDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const connection = await mongoose.connect(
            "mongodb+srv://nicolasC4:DNg9lDP10LHcRBsW@repaso.hce4hnq.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const url = `${connection.connection.host}:${connection.connection.port}`;
            console.log(`MongoDB conectado en : ${url}`);

    } catch (error) {
        console.log(`error : ${error.message}`);
        process.exit(1);
                
    }
}

module.exports = conectarDB;