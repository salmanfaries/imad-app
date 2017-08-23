var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
 title:'Article one | Salman Faries',
 heading: 'Article one',
 date:'sep 5,2016',
 content:`<p>Hi, Iam Salman Faries. This is my first HTML and CSS application. Pray for me to become a app developer.
            </p>
            <p>
                I will teach the app to students for sure.Trust me. I will create useful appications for the society.
            </p>
            <p> I want develop UNWO app in my style. Help me tpo understand the app development and deployment fully.
            </p>`
 
};
function CreateTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=date.content;
    
var htmlTemplate=`
 <html>
    <head>
        <title> ${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
     res.send(CreateTemplate(articleone));
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
