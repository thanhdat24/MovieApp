const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    review: {
      type: String,
      required: [true, 'Review can not be empty!'],
    },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'userId',
    select: 'fullName photo',
  }).populate({
    path: 'movieId',
    select: 'name',
  });
  next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
