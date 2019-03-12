var database = data;

database.forEach((prod) => {
/*como não consegui implementar a função que escrevia o arquivo corrigido 
estou listando os arquivos corrigos aqui*/
	console.log('--------------------------------') //separador
	console.log("Id:" + prod.id)
	console.log("Name:" + prod.name)
	console.log("Price:" + prod.price)
	console.log("Quantity:" + prod.quantity)
})