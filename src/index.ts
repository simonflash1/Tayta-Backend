import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import sequelize from './db';
import routes from './routes';
dotenv.config();

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// SINCRONIZACION CON LA BASE DE DATOS
sequelize.sync({ force: false })
  .then(() => {
    
  })
  .catch((err) => {
    console.error('Error al sincronizar modelos con la base de datos:', err);
  });
  
//  RUTA PRINCIPAL 
app.use('/', routes);


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
