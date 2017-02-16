var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
  score: {
    type:Number,
  },
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  },
},
{
  timestamps: true
});


mongoose.model('Score', ScoreSchema);
