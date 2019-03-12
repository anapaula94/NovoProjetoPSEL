var database = data;

database.forEach((prod) => {
	if(isNaN(prod.price)) {
		prod.price = parseFloat(prod.price) //converter de string pra float
	}
})
