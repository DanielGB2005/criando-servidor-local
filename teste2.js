var http = require("http");     // é como se fosse a importação de uma biblioteca
                                // esse script está criando um servidor web que pode apresentar o que desejarmos

var n = require("./primeiromodulo");    

var dia = require("./moduloData.js");

http.createServer(function (req, res){
    res.writeHead(200, {"content-type": "text/html"}) // esse comando serve para dizer que o servidor abrirá uma página do tipo HTML

    res.write("<h2> teste teste teste </h2>");
    res.write(" esta é a segunda criação de servidor local que é feita <br/>")
    res.write(Date());
    res.write("<br/>")
    res.write(n.nome());
    res.write("<br/>")
    res.write(dia.diaDaSemana());
    res.end(" <h2> boa tarde! </h2> ");

    

}).listen(2000);   // no navegador, deve-se colocar 'localhost:2000', pois é a porta sendo usada