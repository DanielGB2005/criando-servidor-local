var http = require("http");     // é como se fosse a importação de uma biblioteca
                                // esse script está criando um servidor web que pode apresentar o que desejarmos

http.createServer(function (req, res){
    res.writeHead(200, {"content-type": "text/html"}) // esse comando serve para dizer que o                                                  servidor abrirá uma página do tipo HTML
    res.end(" <h2> boa tarde! </h2> ");

}).listen(80); 