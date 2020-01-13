let http = require('http'),
    port = 2180,
    fs = require('fs'),
    url = require('url'),
    queryString = require('querystring'),
    markdown = require('markdown').markdown,
    code = 'Ceci est un **paragraphe**';

// fs.readFile('../pages/login.html',function(err,page){
//     if(err){
//         throw err;
//     }
// });

let server = http.createServer();

server.on('request',function(req,res){
        
    let params = queryString.parse(url.parse(req.url).query);

    res.writeHead(200, {"content-type":"text/html"});
    if('nom' in params && ' ' && 'prenom' in params && 'typecompte' in params){
        res.write(params['nom'] + params['prenom'] + ', ' + params['typecompte']);
    }
    // else if(page == '/'){
    //     res.write('Aucun nom renseigné');
    // }
    else{
        res.writeHead(404);
    }
    res.end();
});

server.on('close',function(){
    console.log(markdown.toHTML(code));
    console.log('Serveur déconnecté');
})
server.listen(port);
server.close();
