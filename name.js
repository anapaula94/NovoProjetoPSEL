var database = data;

database.forEach((prod) => { //substituindo os caracteres 
	prod.name = prod.name.replace(/æ/g, 'a')
	prod.name = prod.name.replace(/¢/g, 'c')
	prod.name = prod.name.replace(/ø/g, 'o')
	prod.name = prod.name.replace(/ß/g, 'b')
})

