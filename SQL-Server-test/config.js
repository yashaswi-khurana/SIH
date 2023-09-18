const server = process.env.AZURE_SQL_SERVER;
const database = process.env.AZURE_SQL_DATABASE;
const port = parseInt(process.env.AZURE_SQL_PORT);
const type = process.env.AZURE_SQL_AUTHENTICATIONTYPE;

export const config = {
    server,
    port,
    database,
    authentication: {
        type
    },
    options: {
        encrypt: true
    }
};