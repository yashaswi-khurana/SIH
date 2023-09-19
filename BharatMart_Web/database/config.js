const server = "bharatmart-sih.database.windows.net";
const database = "bharatmart";
const port = parseInt(1433);
const type = "azure-active-directory-default";

const config = {
    user:"sih",
    password:"bharatmart",
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

module.exports = config;