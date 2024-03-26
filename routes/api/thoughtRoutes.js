const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/Reactions
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// /api/Thoughts/:ThoughtId/Reactions/:ReactionId
router.route('/:thoughtId/reactions/:reactionId').post(addThoughtReaction).delete(removeThoughtReaction);

module.exports = router;
