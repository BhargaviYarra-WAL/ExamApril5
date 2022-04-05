const express = require("express");
const router = express.Router();
const todoModel = require("../mysqlmodels/todo");
router.get("/", function (req, res) {
  todoModel.findAll().then(
    function (todos) {
      res.status(200).json(todos);
    },
    function (error) {
      res.status(500).send(error);
    }
  );
});
router.get("/create/:status/:title/:description", function (req, res) {
  todoModel
    .create({
      status: req.params.status,
      title: req.params.title,
      description: req.params.description,
    })
    .then(function (product) {
      res.status(200).json(product);
    });
});
module.exports = router;
