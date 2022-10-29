import itemModel from '../models/items';

/* Add a item */
const add = async (req, res) => {
    const addDetails = {
        name: req.body.name,
        category: req.body.category,
        weight: req.body.weight,
        price: req.body.price,
    }
    
    const add = new itemModel(addDetails);

    try {
        await add.save();
        res.status(200).send("Details added successfully!");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

/* Get all items */
const read = async (req, res) => {
    try {
        const allDetails = await itemModel.find();
        res.status(200).send({ all: allDetails });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

/* Get a item by ID */
const readById = async (req, res) => {
    const ItemId = req.params.id;

    try {
        const details = await itemModel.findById(ItemId);
        res.status(200).send({ item: details });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

/* Update a item */
const update = async (req, res) => {
    const ItemId = req.params.id;

    const details = {
      name: req.body.name,
      category: req.body.category,
      weight: req.body.weight,
      price: req.body.price,
    }

    try {
        const updateDetails = await itemModel.findByIdAndUpdate(ItemId, details);
        res.status(200).send("Item updated successfully!");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

/* Delete a item */
const deleteItem = async (req, res) => {
    const ItemId = req.params.id;

    try {
        await itemModel.findByIdAndDelete(ItemId);
        res.status(200).send("Item deleted successfully!");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export default { add, read, readById, update, deleteItem }
