 var fs = require("fs");

 fs.appendFile("novoArquivo.txt", "arquivo criado com sucesso!", function(err) {
    if(err) throw err;
    console.log("Arquivo criado...");
 });