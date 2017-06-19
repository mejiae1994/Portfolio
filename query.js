//var pg = require('pg');
//var connection = "postgres://postgres:123456@localhost:5432/posts";
//
//var pgClient = new pg.Client(connection);
//pgClient.connect();
//
//
//var createtb= "CREATE TABLE customers if not exists (title VARCHAR(255) NOT NULL, text NOT NULL, id SERIAL UNIQUE)";
//pgClient.query(createtb);
//pgClient.end();


//var pg = require('pg');
//var connectionString = "pg://postgres:123456@localhost:5432/posts";
//var pgClient = new pg.Client(connectionString);
//pgClient.connect();
//
//pgClient.query("CREATE TABLE IF NOT EXISTS comment(id SERIAL UNIQUE,date date NOT NULL default CURRENT_DATE, name varchar(255) NOT NULL, email varchar(255) NOT NULL, comment text NOT NULL)");
//pgClient.end();


var pg = require("pg");

var connect = "postgres://postgres:123456@localhost:5432/posts";

var client = new pg.Client(connect);
client.connect();

client.query("CREATE TABLE IF NOT EXISTS blogs(title varchar(64), lastname varchar(64))");
 client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Ronald', 'McDonald']);
 client.query("INSERT INTO emps(firstname, lastname) values($1, $2)", ['Mayor', 'McCheese']);



    client.end();
