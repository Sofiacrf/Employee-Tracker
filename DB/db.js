const connection = require ("connection");

class DB {
    constructor(connection){
        this.connection = connection;
    }
    // Add code here
    addRole(role){
        return this.connection.query("INSERT INTO role SET ?", role);
    }
}


module.exports = new DB(connection);