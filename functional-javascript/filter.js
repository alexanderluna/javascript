module.exports = function getShortMessages(obj) {
  var messages = new Array();
  obj.filter(function(item){
      if(item.message.length <= 50){
        messages.push(item.message);
      }});
  return messages;
};
