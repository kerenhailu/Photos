const clothingRouter = require('express').Router();
const photosActions = require('../../Controllers/Photos-controller');

clothingRouter.get('/', photosActions.getAllPhotos);


module.exports = clothingRouter;