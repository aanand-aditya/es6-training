const a = 7.5
function changeConst(x){
	try{
		a = x;
	}catch(e){
		return("Sorry! cannot change the value of a constant");
	}
}
exports.changeConst=changeConst;