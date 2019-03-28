var database =recovered;

var valorPanelas =0 ;
var valorEletrodomesticos= 0;
var valorEletronicos= 0;

database.forEach((prod) => {

		if(prod.category=="Panelas")
		{
			valorPanelas = valorPanelas + prod.price;
		}
		else if(prod.category=="Eletrodomésticos")
		{
			valorEletrodomesticos = valorEletrodomesticos + prod.price;
		}
		else if(prod.category=="Eletrônicos")
		{
			valorEletronicos = valorEletronicos + prod.price;
		}
})

var aPanelas = parseFloat(valorPanelas).toFixed(2);
var aEletrodomesticos = parseFloat(valorEletrodomesticos).toFixed(2);
var aEletronicos = parseFloat(valorEletronicos).toFixed(2);

console.log("Valor total da categoria Panelas:" + aPanelas)
console.log("Valor total da categoria Eletrodomésticos:" + aEletrodomesticos)
console.log("Valor total da categoria Eletrônicos:"+ aEletronicos)

