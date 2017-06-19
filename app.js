var express = require('express');
var pg = require('pg'); //postgres
var parser = require('body-parser');
const app = express();

app.use(express.static( "public" )); 
app.set('view engine', 'ejs');

app.use(parser.json());
app.use(parser.urlencoded({
  extended: true
}));

var conString =  "postgres://postgres:123456@localhost:5432/posts";






//var express = require('express');
//
//var app = express();
//
//app.use(express.static("public"));
//
//app.set('view engine', 'ejs');
//
//var pg = require("pg");
//
//var connect = "postgres://postgres:123456@localhost:5432/posts";
//
//var client = new pg.Client(connect);
//client.connect();


var lastid = 0;
// getting data from the database
app.get('/', function (req, res, next) {  
  
    pg.connect(conString, function (err, client, done) {
    if (err) {
      // pass the error to the express error handler
      return next(err)
    }
    client.query('SELECT id, title, post FROM postlist;', [], function (err, result) {
      
      

      if (err) {
        // pass the error to the express error handler
        return next(err)
      }
  
         
          var postit = result.rows;
        
         res.render('home', {postit});
    
        done(); 
        
      
    })
  })
})

//app.get('/', function(req, res)
//{
//    res.render('home');
//});


//posting data tot he database
app.post('/add', function (req, res, next) {  
  
    pg.connect(conString, function (err, client, done) {
    if (err) {
      // pass the error to the express error handler
      return next(err)
    }
       
        
    client.query('INSERT INTO postlist(title, post) VALUES($1, $2)', [req.body.title, req.body.text]);
    
        done();
        res.redirect('/');
       
  });
});

//deleting from database


app.post('/delete/:id', function(req, res){
           
    pg.connect(conString, function (err, client, done) {
    if (err) {
      // pass the error to the express error handler
      return next(err)
    }
      
       
        
    client.query('DELETE FROM postlist where id = $1', [req.params.id]);

        done();
        res.redirect('/');
       
  });
           
});
app.get('/blog', function(req, res)
        {
        
        res.render('blog');
        
});


app.get('/portfolio', function(req, res)
        {
        
        res.render('portfolio');
});

app.listen(3000, function() {
    console.log("app running on local host 3000");
});