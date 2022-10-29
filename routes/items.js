import express from 'express';
const Router = express();

import itemController from '../controllers/itemController';

Router.post("/add", itemController.add);
Router.get('/', itemController.read);
Router.get('/:id', itemController.readById);
Router.put('/update/:id', itemController.update);
Router.delete('/delete/:id', itemController.deleteItem);

export default Router;