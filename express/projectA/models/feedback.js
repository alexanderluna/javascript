var mongoose = require('mongoose');
var feedbackSchema = mongoose.Schema({
  displayName: { type: String, required: true, lowercase: true},
  content: { type: String, required: true},
  date: { type: Date, default: Date.now}
});


feedbackSchema.methods.name = () => {
  return this.displayName;
}


var Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
