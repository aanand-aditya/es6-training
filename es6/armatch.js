function arMatch(){
  var ar = [1,2,3];
  var[a, ,b] = ar;
  [a,b] = [b,a];
  return("Result after destructuring assingment and swapping> a:"+a+" and "+"b:"+b);
 }
 exports.arMatch = arMatch;
