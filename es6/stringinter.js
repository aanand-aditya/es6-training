function strIntrpo(){
  var name = {n:"abc",age:20};
  var item = {item:"pen"};
  var mes = `hi ${name.n} of age ${name.age},
  take your ${item.item}`;
  return mes;
}
//console.log(strIntrpo());
exports.strMes = strIntrpo;