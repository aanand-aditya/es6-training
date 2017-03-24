function giveFives(ar){
	var fives = [];
	ar.forEach(v => {
		if(v%5 == 0)
			fives.push(v);
	})
	return(fives);
}
exports.giveFives = giveFives;