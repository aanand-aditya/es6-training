function mapEvenOdd(a){
  var pair = a.map(v => ({evens:v+1,odd:v}));
  return pair;
}
exports.mapEvenOdd = mapEvenOdd;