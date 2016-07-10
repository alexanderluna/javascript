console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

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
