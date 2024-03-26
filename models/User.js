const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
 
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


userSchema
  .virtual('Friends').get(function () {
    return this.friends.length;
  })

userSchema
  .pre('remove', function(next) {
    this.model('Thought').deleteMany({ userId: this._id }, (err,res) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res);
      }
      next();
    })
  })

const User = model('user', userSchema);

module.exports = User;
