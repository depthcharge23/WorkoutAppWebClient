const dotenv = require("dotenv");
dotenv.config();

const SERVER_DNS = process.env.SERVER_DNS || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3001;

const CONNECTION_STR = `http://${SERVER_DNS}:${SERVER_PORT}`;

class RegimenModel {
    
}

export default RegimenModel;
