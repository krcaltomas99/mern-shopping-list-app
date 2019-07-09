const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// @route   Get api/items
// @desc    Get all items
// @ąccess  Public
router.get('/', (req, res) => {
	Item.find()
		.sort({date: -1})
		.then(items => res.json(items))
});


// @route   POST api/items
// @desc    Create an items
// @ąccess  Public
router.post('/', (req, res) => {
	const newItem = new Item({
		name: req.body.name
	});

	newItem.save()
		.then(item => res.json(item))
});

// @route   DELETE api/items/:id
// @desc    Delete an items
// @ąccess  Public
router.delete('/:id', (req, res) => {
	Item.findById(req.params.id)
		.then(item => item.remove().then(() => res.send({success: true})))
		.catch(() => res.status(404).json({success: false}))
});

module.exports = router;