const express = require('express');
const authController = require('../controllers/authController');
const movieController = require('../controllers/movieController');

const router = express.Router();

//Protect all routers after this middleware
router.use(authController.protect);

// RestrictTo "admin"
router.use(authController.restrictTo('admin'));

router.route('/').get(movieController.getAllMovie);

router
  .route('/')
  .post(movieController.uploadUserPhoto, movieController.createMovie);

router
  .route('/:id')
  .get(movieController.getDetailMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);
module.exports = router;
