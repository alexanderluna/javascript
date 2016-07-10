// console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
//
// function html(string, ...value) {
//   value.forEach(function(char){
//     char = char.replace(/'/, "&apos");
//     char = char.replace(/"/, "&quot");
//     char = char.replace(/</, "&lt");
//     char = char.replace(/>/, "&gt");
//     char = char.replace(/&/, "&amp");
//   })
//
//   return value
// }

var string_one = "'<Hello &>'"
var string_two = "'</ br>'"
console.log(html`<b>${string_two} says</b>: "${string_two}"`);

function html(string, ...value) {
  value.forEach(function(char){
    char = char.replace(/'/, "&apos");
    char = char.replace(/"/, "&quot");
    char = char.replace(/</, "&lt");
    char = char.replace(/>/, "&gt");
    char = char.replace(/&/, "&amp");
  })

  return value
}
