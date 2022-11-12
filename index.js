const express = require( 'express' );
const cors = require( "cors" );
const conectarDB = require( './config/db' );

//Crear el server
const app = express();


// Crear la BD
conectarDB();

app.use(cors());

app.use(express.json());


app.use('/api/productos', require('./routes/producto'));



app.listen( 4000, () => {
    console.log( 'El server esta corriendo perfectamente' )

})