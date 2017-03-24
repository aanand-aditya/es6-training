class Area{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	calcArea(){
		return this.x*this.y;
	}
}
var sq = new Area(2,2);
var res = sq.calcArea();
exports.res = res;