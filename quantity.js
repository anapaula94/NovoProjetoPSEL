var database = data;

database.forEach((prod) => {
	if(!prod.quantity) {// no caso caso não existir
		prod.quantity = 0
	}
})

console.log('fix: ', database)


