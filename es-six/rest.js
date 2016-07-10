module.exports = function average(...list){
  var result = 0;
  list.forEach(function(item){
    result += item;
  });
  return (result/list.length);
}
