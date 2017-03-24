require('babel-register');

console.log((require('./const.js').changeConst(3)));
console.log((require('./arrowFunc1.js').mapEvenOdd([1,3,5,7])));
console.log((require('./arrowFunc2.js').giveFives([5,7,17,20,25])));
console.log((require('./defparam.js').defParam(5)));
console.log((require('./spParam.js').spreadParam([1,2,"adi",true])));
console.log((require('./stringinter.js').strMes()));
console.log((require('./binOct.js').check(0b111110111,0o767)));
console.log((require('./armatch.js').arMatch([1,2,3])));
console.log((require('./objmatch.js').objMatch({a:2,b:{d:"adi"},c:2333})));
console.log((require('./jsclass.js').res));


