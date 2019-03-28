
var database =recovered;

id = database;
n = database;

forName = n.sort(function(a,b){
	if (a.name < b.name)
        return -1;

    if (a.name> b.name)
        return 1;

    return 0;
});
console.log("Ordenado por nome:")
console.log(forName)

/*não consegui fazer os dois funcionar simultaneamente, 
então o que está por ultimo no código sobreescreve,
procurei por dias a solução mas falhei em achar*/

forId = id.sort(function(c,d){
	return c.id - d.id;
});
console.log("Ordenado por ID:")
console.log(forId)

