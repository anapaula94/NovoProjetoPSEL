var database = data;

var jsonData = JSON.stringify(database,null," ");

function escrever(conteudo, nomeArquivo, tipoConteudo){
	var a = document.createElement("a");
	var file = new Blob([conteudo],{type: tipoConteudo});
	a.href = URL.createObjectURL(file);
	a.download = nomeArquivo;
	a.click();
}

escrever(jsonData, 'recovered-database.json', 'text/plain');