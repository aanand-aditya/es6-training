function objMatch(obj){
	var {a,b,c} = obj;
	var {a:e,b:{d:f},c:g} = obj;
    console.log("simple object matching >a:"+a+" "+"b:"+b+" "+"c:"+c);
    return("deep matching  >a:"+e+" "+"d:"+f+" "+"c:"+g);
}
exports.objMatch=objMatch;