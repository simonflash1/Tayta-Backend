"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// MIDDLEWARES
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
// SINCRONIZACION CON LA BASE DE DATOS
db_1.default.sync({ force: true })
    .then(() => {
    console.log("database sincronizada con exito");
})
    .catch((err) => {
    console.error('Error al sincronizar modelos con la base de datos:', err);
});
//  RUTA PRINCIPAL 
app.use('/', routes_1.default);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
