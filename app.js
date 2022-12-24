var express = require('express'),
    app     = express();
    
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});


app.get('/service', function(req, res){
    res.render('services');
});

app.listen(process.env.PORT, process.env.IP, function(){console.log('climax server started...')});