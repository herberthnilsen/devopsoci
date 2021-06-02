const mysql = require('mysql2');

module.exports = class MySQLUtil {

    connection;
    constructor() {
        this.connection = mysql.createConnection({
            host: '10.0.10.119',
            user: "demo",
            password: 'Demonstration1!',
            database: 'demo',
        });

    }

    execute(query) {
        console.log(`Query===>>> ${query}`);
        this.connection.query(query, (err, result) => {

            if (err) throw err;

            console.log("Resultado=>");
            console.dir(result);

        });
        this.closeConnection();
    }

    closeConnection() {
        this.connection.end(function (err) {
            if (err) {
                return console.log('error:' + err.message);
            }
            console.log('Close the database connection.');
        });
    }

    save(data) {

        this.execute(`INSERT INTO DemoTable(nome) VALUES('${data.nome}')`);
    }

}
