import sql from 'mssql';

export default class Database {
  config = {};
  poolconnection = null;
  connected = false;

  constructor(config) {
    this.config = config;
    console.log(`Database: config: ${JSON.stringify(config)}`);
  }

  async connect() {
    try {
      console.log(`Database connecting...${this.connected}`);
      if (this.connected === false) {
        this.poolconnection = await sql.connect(this.config);
        this.connected = true;
        console.log('Database connection successful');
      } else {
        console.log('Database already connected');
      }
    } catch (error) {
      console.error(`Error connecting to database: ${JSON.stringify(error)}`);
    }
  }

  async disconnect() {
    try {
      this.poolconnection.close();
      console.log('Database connection closed');
    } catch (error) {
      console.error(`Error closing database connection: ${error}`);
    }
  }

  async executeQuery(query) {
    await this.connect();
    const request = this.poolconnection.request();
    const result = await request.query(query);

    return result.rowsAffected[0];
  }

  async create(data) {
    await this.connect();
    const request = this.poolconnection.request();

    request.input('passwd', sql.NVarChar(255), data.passwd);

    const result = await request.query(
      `INSERT INTO Login (passwd) VALUES (@passwd)`
    );

    return result.rowsAffected[0];
  }

  async readAll() {
    await this.connect();
    const request = this.poolconnection.request();
    const result = await request.query(`SELECT * FROM Login`);

    return result.recordsets[0];
  }

  async read(id) {
    await this.connect();

    const request = this.poolconnection.request();
    const result = await request
      .input('id', sql.Int, +id)
      .query(`SELECT * FROM Login WHERE id = @id`);

    return result.recordset[0];
  }

  async update(id, data) {
    await this.connect();

    const request = this.poolconnection.request();

    request.input('id', sql.Int, +id);
    request.input('passwd', sql.NVarChar(255), data.passwd);

    const result = await request.query(
      `UPDATE Login SET passwd=@passwd WHERE id = @id`
    );

    return result.rowsAffected[0];
  }

  async delete(id) {
    await this.connect();

    const idAsNumber = Number(id);

    const request = this.poolconnection.request();
    const result = await request
      .input('id', sql.Int, idAsNumber)
      .query(`DELETE FROM Login WHERE id = @id`);

    return result.rowsAffected[0];
  }
}