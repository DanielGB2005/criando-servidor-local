var http = require ('http');
var n = require('./primeiromodulo')
var dia = require('./modulodata');

//mudando o servidor 
// Ao se trabalhar com módulos, é preciso saber:
// -que eles estão todos ligados a uma página principal, que contém a criação do servidor.

http.createServer (function (req, res) {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<b>Aula de Node<b> <br>');
    res.write('<i>Aluno: </i> ');
    res.write(n.nome()+'<br>');
    //res.write(Date());
    res.write(dia.diaDaSemana()+'<br>');
    res.end('Bom dia!');

}).listen(80);

