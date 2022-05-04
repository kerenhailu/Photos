const clothingRouter = require('express').Router();
const photosActions = require('../../Controllers/Photos-controller');

clothingRouter.get('/', photosActions.getAllPhotos);
clothingRouter.get('/:id', photosActions.getPhotoById);
clothingRouter.get('/', photosActions.postPhotos);
clothingRouter.get('/:id', photosActions.putPhotos);
clothingRouter.get('/:id', photosActions.deletePhotos);


module.exports = clothingRouter;