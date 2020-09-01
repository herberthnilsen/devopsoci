import mysql from 'mysql';

class MySQL {

    constructor(){
        mysql.createConnection({
            host: '',
            user: "demo",
            pass: 'Teste!12',
            database: 'demo'
        });
    }

}