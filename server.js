var express = require('express');
var multer  = require('multer')
var upload = multer();
var app = express();

app.set('views','./views');
app.set('view engine','jade');

app.post('/fileUpload', upload.single('file'), function (req, res, next) {
  var tmp = req.file;
  if ( req.file != null)
    res.json(req.file.size);
  else
    res.redirect('/');
})

app.get('/',function(req,res){
    res.render('index');
})

var port = process.env.PORT || 8080;
app.listen(port);