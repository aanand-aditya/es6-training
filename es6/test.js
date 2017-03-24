/* arrow function expression bodies
var a = [1,3,5,7];
var odds = a.map(v => v+1);
console.log(odds);
var even = a.map(function(v){return (v+3)});
console.log(even);
var pair = a.map(v => ({evens:v+1,odd:v}));
console.log(pair);
*/

/* arrow function statement bodies
var nums = [5,7,15,17,20];
var fives = [];
nums.forEach(v => {
	if(v%5 == 0)
		fives.push(v);
})
console.log(fives);
*/
/* arrow function lexical this
var value = function(){
var nums = [5,7,15,17,20];
var fives = [];
this.nums.forEach((v) => {
    if (v % 5 === 0)
        this.fives.push(v)
})
return(fives);
}
console.log(value());
*/

/* default parameter values
function f (x, y = 7, z = 42) {
    return x + y + z
}
console.log(f(1) === 50)
*/

/*rest parameter
function f(x,y,...a){
	return (x+y)*(a.length);
}
console.log(f(2,3,"adi",3,[1,2],4,6));
*/
/*spread operator
var ar = [1,2,"adi",true];
var c = [4,5,...ar];
console.log(c);
var s = "aditya";
var ch = [...s];
console.log(ch);
*/

var name = {n:"abc",age:20};
var item = {item:"pen"};
var mes = `hi ${name.n} of age ${name.age},
             take your ${item.item}`;
console.log(mes);

