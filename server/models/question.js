var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: {
    type:String,
    required: [true, 'Question is not provided.'],
    minlength: [10, 'Answer must be at least 10 characters in length.']
  },
  correctAnswer: {
    type:String,
    required: true,
  },
  wrongAnswer1: {
    type:String,
    required: true,
  },
  wrongAnswer2: {
    type:String,
    required: true,
  },
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
},
{
  timestamps: true
});


mongoose.model('Question', QuestionSchema);
