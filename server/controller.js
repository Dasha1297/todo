const { Items } = require("./model");

class ItemController {
  async getItems(req, res) {
    const items = await Items.findAll();
    return res.status(200).json(items);
  }

  async createItem(req, res) {
    const newItem = await Items.create(req.body);
    return res.status(200).json(newItem);
  }

  async updateItem(req, res) {
    const item = req.body;
    let updatedItem = await Items.findOne({ where: { id: item.id } });
    updatedItem.update(item);
    return res.status(200).json(updatedItem);
  }

  async deleteItem(req, res) {
    console.log(req.body);
    let deletedItem = await Items.destroy({ where: { id: req.body.id } });
    return res.status(204).json({ result: "delete" });
  }
}

module.exports = new ItemController();
